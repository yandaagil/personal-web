import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Transition = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
