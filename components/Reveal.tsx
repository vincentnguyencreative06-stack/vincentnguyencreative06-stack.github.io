"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealVariant =
  | "editorial"
  | "marginalia"
  | "marginalia-door";

type RevealDirection = "up" | "left" | "right";

type RevealProps = {
  as?: "div" | "section";
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  direction?: RevealDirection;
  delay?: number;
  amount?: number;
  once?: boolean;
};

const EDITORIAL_EASE =
  "cubic-bezier(0.22, 1, 0.36, 1)";

const MARGINALIA_EASE =
  "cubic-bezier(0.16, 1, 0.3, 1)";

function getHiddenTransform(
  variant: RevealVariant,
  direction: RevealDirection,
) {
  if (variant === "editorial") {
    return "translate3d(0, 22px, 0)";
  }

  if (variant === "marginalia-door") {
    return "translate3d(0, 0, 0) scale(1.015)";
  }

  if (direction === "left") {
    return `
      translate3d(-34px, 18px, 0)
      rotate(-1.25deg)
      scale(0.985)
    `;
  }

  if (direction === "right") {
    return `
      translate3d(34px, 18px, 0)
      rotate(1.25deg)
      scale(0.985)
    `;
  }

  return `
    translate3d(0, 30px, 0)
    rotate(-0.7deg)
    scale(0.985)
  `;
}

export function Reveal({
  as = "div",
  children,
  className = "",
  variant = "editorial",
  direction = "up",
  delay = 0,
  amount = 0.14,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] =
    useState(false);

  const [reduceMotion, setReduceMotion] =
    useState(false);

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updatePreference = () => {
      setReduceMotion(preference.matches);
    };

    updatePreference();

    preference.addEventListener?.(
      "change",
      updatePreference,
    );

    return () => {
      preference.removeEventListener?.(
        "change",
        updatePreference,
      );
    };
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (
      reduceMotion ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: Math.min(
          Math.max(amount, 0),
          1,
        ),
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [amount, once, reduceMotion]);

  const visible =
    isVisible || reduceMotion;

  const isDoor =
    variant === "marginalia-door";

  const duration = isDoor
    ? 1050
    : variant === "marginalia"
      ? 900
      : 720;

  const fadeDuration =
    variant === "editorial" ? 480 : 580;

  const easing =
    variant === "editorial"
      ? EDITORIAL_EASE
      : MARGINALIA_EASE;

  const transitions = [
    `opacity ${fadeDuration}ms ease-out ${delay}ms`,
    `transform ${duration}ms ${easing} ${delay}ms`,
  ];

  if (isDoor) {
    transitions.push(
      `clip-path ${duration}ms ${MARGINALIA_EASE} ${delay}ms`,
    );
  }

  const style: CSSProperties = {
    opacity: visible
      ? 1
      : isDoor
        ? 1
        : 0,

    transform: visible
      ? `
        translate3d(0, 0, 0)
        rotate(0deg)
        scale(1)
      `
      : getHiddenTransform(
          variant,
          direction,
        ),

    clipPath: isDoor
      ? visible
        ? "inset(0 0% 0 0%)"
        : "inset(0 50% 0 50%)"
      : undefined,

    transition: reduceMotion
      ? "none"
      : transitions.join(", "),

    willChange: visible
      ? "auto"
      : isDoor
        ? "opacity, transform, clip-path"
        : "opacity, transform",
  };

  const setElementRef = (
    element: HTMLElement | null,
  ) => {
    elementRef.current = element;
  };

  if (as === "section") {
    return (
      <section
        ref={setElementRef}
        className={className}
        style={style}
      >
        {children}
      </section>
    );
  }

  return (
    <div
      ref={setElementRef}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}
