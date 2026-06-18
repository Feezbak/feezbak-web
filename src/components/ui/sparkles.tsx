import React, { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  particleSpeed?: number;
};

const generateParticles = (count: number, minSize: number, maxSize: number) =>
  Array.from({ length: count }, () => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (maxSize - minSize) + minSize,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
  }));

export const SparklesCore = ({
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.2,
  particleDensity = 80,
  particleColor = "#FF7F61",
}: SparklesProps) => {
  const id = useId();
  const particles = React.useMemo(
    () => generateParticles(particleDensity, minSize, maxSize),
    [particleDensity, minSize, maxSize]
  );

  return (
    <div
      className={cn("relative w-full h-full", className)}
      style={{ background }}
    >
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id={`${id}-gradient`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={particleColor} stopOpacity="1" />
            <stop offset="100%" stopColor={particleColor} stopOpacity="0" />
          </radialGradient>
        </defs>
        {particles.map((p) => (
          <motion.circle
            key={p.id}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r={p.size}
            fill={`url(#${id}-gradient)`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -20, -40],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};
