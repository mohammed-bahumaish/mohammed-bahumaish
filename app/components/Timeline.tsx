"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineProps {
  avatarUrl: string;
}

export function Timeline({ avatarUrl }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end 50%", "start 50%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <motion.div
        className="absolute -left-0.5 z-10 flex"
        style={{
          top: 0,
          height: "100%",
          y: useTransform(scrollYProgress, [0, 1], ["100%", "0%"]),
        }}
      >
        <div className="relative ml-2 flex h-5 w-5 rounded-full bg-indigo-600"></div>
      </motion.div>
      <div className="bg-opacity-24 absolute bottom-0 left-1/2 top-0 w-2 -translate-x-1/2 rounded-full bg-[#E8ECEF] shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.32)]">
        <motion.div
          className="absolute inset-0 w-full origin-bottom rounded-full bg-gradient-to-b from-indigo-300 to-transparent"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
    </div>
  );
}
