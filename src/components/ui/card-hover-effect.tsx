import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: string;
    accent: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-2 py-4", className)}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-2xl"
                style={{ background: `${item.accent}18` }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card accent={item.accent}>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
              style={{ background: `${item.accent}18` }}
            >
              {item.icon}
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({
  className,
  children,
  accent,
}: {
  className?: string;
  children: React.ReactNode;
  accent?: string;
}) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-black/[0.04] relative z-10 transition-shadow duration-300 group-hover:shadow-xl",
      className
    )}
    style={{ borderColor: "rgba(0,0,0,0.06)" }}
  >
    {children}
  </div>
);

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h3
    className={cn(
      "text-[#06060c] font-bold text-lg mb-2 tracking-tight",
      className
    )}
  >
    {children}
  </h3>
);

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p className={cn("text-[#847e95] text-sm leading-relaxed", className)}>
    {children}
  </p>
);
