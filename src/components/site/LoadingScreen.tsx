import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // A small timeout ensures the entrance animations render 
    // before the exit animation is triggered, preventing JS layout thrashing.
    const timer = setTimeout(() => setShow(false), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          // Using a built-in easing string keeps the bundle processing light
          transition={{ duration: 0.8, ease: "easeInOut" }} 
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background text-foreground will-change-transform"
        >
          <div
            style={{ fontFamily: "var(--font-display)" }}
            className="relative text-5xl font-semibold tracking-tight md:text-7xl"
          >
            Webrion<span className="text-4xl">.</span>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 h-[6px] bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}