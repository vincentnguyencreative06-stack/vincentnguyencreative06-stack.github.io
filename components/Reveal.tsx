"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealVariant = "editorial" | "marginalia" | "marginalia-door";
type RevealDirection = "up" | "left" | "right" | "none";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  direction?: RevealDirection;
  delay?: number;
  amount?: number;
  once?: boolean;
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  return prefersReducedMotion;
}

function hiddenClipPath(
  direction: RevealDirection,
  variant: RevealVariant,
) {
  const distance = variant === "marginalia" ? "10%" : "6%";

  switch (direction) {
    case "left":
      return `inset(0 0 0 ${distance})`;
    case "right":
      return `inset(0 ${distance} 0 0)`;
    case "none":
      return "inset(0 0 0 0)";
    case "up":
    default:
      return `inset(0 0 ${distance} 0)`;
  }
}

export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  variant = "editorial",
  direction = "up",
  delay = 0,
  amount = 0.16,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return;
    }

    /*
     * The Marginalia hero begins fully clipped, like two closed doors.
     * A fully clipped element is not handled consistently by every browser's
     * IntersectionObserver, so this one entrance opens directly after mount.
     */
    if (variant === "marginalia-door") {
      const openDoor = window.setTimeout(() => {
        setIsVisible(true);
      }, 80);

      return () => {
        window.clearTimeout(openDoor);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: Math.min(Math.max(amount, 0), 1),
        rootMargin: "0px 0px -7% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [amount, once, prefersReducedMotion, variant]);

  const isDoor = variant === "marginalia-door";
  const style: CSSProperties = prefersReducedMotion
    ? { animation: "none" }
    : {
        /*
         * Keep the layout box stationary. Moving an entire section with
         * translateY can make the end of one chapter visually collide with
         * the beginning of the next while scrolling.
         */
        animation: "none",
        opacity: isDoor ? 1 : isVisible ? 1 : 0,
        clipPath: isDoor
          ? isVisible
            ? "inset(0 0% 0 0%)"
            : "inset(0 50% 0 50%)"
          : isVisible
            ? "inset(0 0 0 0)"
            : hiddenClipPath(direction, variant),
        transitionProperty: isDoor ? "clip-path" : "opacity, clip-path",
        transitionDuration: isDoor
          ? "1100ms"
          : variant === "marginalia"
            ? "880ms"
            : "680ms",
        transitionTimingFunction: isDoor
          ? "cubic-bezier(0.77, 0, 0.18, 1)"
          : "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${Math.max(delay, 0)}ms`,
        willChange: isDoor ? "clip-path" : "opacity, clip-path",
      };

  return (
    <Tag
      ref={elementRef}
      className={`${className} reveal reveal-controlled`.trim()}
      style={style}
      data-reveal-variant={variant}
      data-reveal-visible={isVisible ? "true" : "false"}
    >
      {children}
    </Tag>
  );
}
