export const listItemAnimation = (
  isPresent = true,
  safeToRemove: () => void
) => {
  return {
    layout: true,
    initial: "in",
    animate: isPresent ? "in" : "out",
    whileTap: "tapped",
    variants: {
      in: { scaleY: 1, opacity: 1, zIndex: 1 },
      out: { scaleY: 0, opacity: 0, zIndex: -1 },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition: { type: "spring", stiffness: 500, damping: 50, mass: 1 },
  };
};

export const opacityAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" } },
};

export const opacityWithScaleAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};
