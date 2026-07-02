import { motion } from "motion/react";

export default function BlurFadeText({ text, className, delay = 0, yOffset = 8 }: {
  text: string; className?: string; delay?: number; yOffset?: number
}) {
  return (
    <motion.span
      initial={{ y: -yOffset, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {text}
    </motion.span>
  );
}
