"use client";
import { MotionConfig } from "framer-motion";
import { SmoothScroll } from "@/components/SmoothScroll";

// reducedMotion="user" => framer-motion respeta prefers-reduced-motion en toda la app.
export function Providers({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      {children}
    </MotionConfig>
  );
}
