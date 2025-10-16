
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    // Only initialize once per full app lifecycle
    if (mountedRef.current) return;
    mountedRef.current = true;

    // Guard for client environment
    if (typeof window === "undefined") return;

    // Small delay to ensure DOM is ready
    timeoutRef.current = setTimeout(() => {
      try {
        if (lenisRef.current) return;

        lenisRef.current = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
          autoResize: true,
        });

        function loop(time: number) {
          const l = lenisRef.current;
          if (l) {
            l.raf(time);
            rafRef.current = requestAnimationFrame(loop);
          }
        }

        rafRef.current = requestAnimationFrame(loop);
      } catch (err) {
        // Lenis init may throw; fail gracefully
        console.error("Lenis initialization error:", err);
      }
    }, 100);

    return () => {
      // Cleanup with guards and try/catch to prevent DOM errors
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      
      if (rafRef.current !== null) {
        try {
          cancelAnimationFrame(rafRef.current);
        } catch {
          // Ignore cancellation errors
        }
        rafRef.current = null;
      }

      const l = lenisRef.current;
      if (l) {
        try {
          // Defensively check if destroy method exists
          if (typeof l.destroy === "function") {
            l.destroy();
          }
        } catch (err) {
          // Ignore DOM-remove race errors during cleanup
          console.warn("Lenis destroy error (ignored):", err);
        } finally {
          lenisRef.current = null;
        }
      }
    };
  }, []); // Run only once - empty deps array

  return null;
}

