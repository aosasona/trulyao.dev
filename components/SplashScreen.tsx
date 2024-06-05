import { FC, ReactElement } from "react";
import { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  visible?: boolean | any;
}

const SplashScreen: FC<Props> = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={{ y: 0, backgroundColor: "rgb(23 23 23)" }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="fixed flex items-center justify-center top-0 h-screen w-screen bg-neutral-500 backdrop-blur-2xl z-[99]"
        >
          <>
            <motion.div
              initial={{ opacity: 0, y: 75, rotate: "45deg" }}
              animate={{ opacity: 1, y: 0, rotate: "0deg" }}
              transition={{
                ease: [0.4, -0.04, -0.01, 0.7],
                duration: 0.65,
                delay: 0.55,
              }}
              className="text-5xl lg:text-6xl font-thin overflow-hidden"
            >
              Ayodeji
            </motion.div>
          </>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

SplashScreen.defaultProps = {
  visible: true,
};

export default SplashScreen;
