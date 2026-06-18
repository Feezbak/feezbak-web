import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorderButton({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  onClick,
  as: Component = "button",
  ...rest
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  onClick?: () => void;
  as?: any;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative cursor-pointer inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none",
        containerClassName
      )}
      onClick={onClick}
      {...rest}
    >
      <MovingBorder duration={duration} rx="50%" ry="50%">
        <div
          className={cn("h-20 w-20 opacity-[0.8]", borderClassName)}
          style={{
            background:
              "radial-gradient(#FF7F61 40%, #6382F2 60%, transparent 70%)",
          }}
        />
      </MovingBorder>
      <span
        className={cn(
          "relative inline-flex h-full w-full items-center justify-center rounded-full bg-[#06060c] px-8 py-2 text-sm font-bold text-white antialiased",
          className
        )}
      >
        {children}
      </span>
    </Component>
  );
}

function MovingBorder({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
