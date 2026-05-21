"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// 全站平滑滚动（点击 #锚点 也会平滑过去）
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}
