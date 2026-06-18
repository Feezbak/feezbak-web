import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  gradientWord,
}: {
  words: string;
  className?: string;
  gradientWord?: string;
}) => {
  const wordsArr = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div>
        <div className="leading-snug tracking-wide">
          {wordsArr.map((word, idx) => {
            const isGradient = gradientWord && word === gradientWord;
            return (
              <motion.span
                key={word + idx}
                className={cn(
                  "inline-block mr-2",
                  isGradient
                    ? "bg-gradient-to-r from-[#FF7F61] via-[#FF2976] to-[#6382F2] bg-clip-text text-transparent"
                    : "text-[#06060c]"
                )}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.06,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
