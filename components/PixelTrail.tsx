"use client";

import { useEffect, useRef, useState } from "react";

type PixelTrailProps = {
  pixelSize?: number;
  pixelColor?: string;
  fadeDuration?: number;
  delay?: number;
  className?: string;
  pixelClassName?: string;
};

type TrailLayout = {
  columns: number;
  rows: number;
  enabled: boolean;
};

export function PixelTrail({
  pixelSize = 68,
  pixelColor = "var(--pixel-trail-color)",
  fadeDuration = 850,
  delay = 90,
  className = "",
  pixelClassName = "",
}: PixelTrailProps) {
  const [layout, setLayout] = useState<TrailLayout>({
    columns: 0,
    rows: 0,
    enabled: false,
  });

  const pixelsRef = useRef<Array<HTMLSpanElement | null>>([]);
  const fadeTimersRef = useRef<Map<number, number>>(new Map());
  const lastPixelRef = useRef(-1);
  const animationFrameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateLayout = () => {
      const enabled = finePointer.matches && !reducedMotion.matches;

      setLayout({
        columns: enabled ? Math.ceil(window.innerWidth / pixelSize) : 0,
        rows: enabled ? Math.ceil(window.innerHeight / pixelSize) : 0,
        enabled,
      });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    finePointer.addEventListener("change", updateLayout);
    reducedMotion.addEventListener("change", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
      finePointer.removeEventListener("change", updateLayout);
      reducedMotion.removeEventListener("change", updateLayout);
    };
  }, [pixelSize]);

  useEffect(() => {
    if (!layout.enabled) return;

    const revealPixel = () => {
      animationFrameRef.current = null;

      const column = Math.floor(pointerRef.current.x / pixelSize);
      const row = Math.floor(pointerRef.current.y / pixelSize);

      if (
        column < 0 ||
        row < 0 ||
        column >= layout.columns ||
        row >= layout.rows
      ) {
        return;
      }

      const index = row * layout.columns + column;

      if (index === lastPixelRef.current) return;
      lastPixelRef.current = index;

      const pixel = pixelsRef.current[index];
      if (!pixel) return;

      const previousTimer = fadeTimersRef.current.get(index);
      if (previousTimer !== undefined) {
        window.clearTimeout(previousTimer);
      }

      pixel.style.transition = "none";
      pixel.style.backgroundColor = pixelColor;
      pixel.style.opacity = "1";

      const fadeTimer = window.setTimeout(() => {
        pixel.style.transition =
          fadeDuration > 0 ? `opacity ${fadeDuration}ms ease-out` : "none";
        pixel.style.opacity = "0";
        fadeTimersRef.current.delete(index);
      }, Math.max(delay, 0));

      fadeTimersRef.current.set(index, fadeTimer);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };

      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(revealPixel);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      fadeTimersRef.current.forEach((timer) => {
        window.clearTimeout(timer);
      });
      fadeTimersRef.current.clear();
    };
  }, [delay, fadeDuration, layout, pixelColor, pixelSize]);

  if (!layout.enabled) return null;

  const pixelCount = layout.columns * layout.rows;

  return (
    <div
      aria-hidden="true"
      className={`pixel-trail ${className}`.trim()}
      style={{
        gridTemplateColumns: `repeat(${layout.columns}, ${pixelSize}px)`,
        gridTemplateRows: `repeat(${layout.rows}, ${pixelSize}px)`,
      }}
    >
      {Array.from({ length: pixelCount }, (_, index) => (
        <span
          className={`pixel-trail__pixel ${pixelClassName}`.trim()}
          key={index}
          ref={(pixel) => {
            pixelsRef.current[index] = pixel;
          }}
        />
      ))}
    </div>
  );
}
