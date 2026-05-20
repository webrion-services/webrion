import { motion } from "framer-motion";

export function SplitReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span key={i} className="reveal-line mr-[0.25em] inline-block align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: delay + i * 0.06 }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
