import { AnimatePresence, motion } from "framer-motion";
import { Underline } from "lucide-react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground text-background"
        >
          <div className="flex items-baseline gap-3 text-5xl font-semibold tracking-tight md:text-7xl">
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.1, 0.8, 0.2, 1] }}
              style={{ fontFamily: "var(--font-display)" }}
              className="relative inline-block" // Crucial for positioning the underline
            >
              Webrion
              {/* The Animated Underline */}
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.5, // Delays the line fill until after the text slides up
                  ease: "easeInOut",
                }}
                className="absolute left-0 bottom-0 h-[2px] bg-accent" // Adjust h-[2px] for thickness and bg-accent for your color
              />
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-2 w-2 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
