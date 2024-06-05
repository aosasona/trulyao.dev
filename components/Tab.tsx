import { FC } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

interface Props {
  identifier: number;
  title: string;
  CurrentTab: number;
  children: any;
  setCurrentTab: any;
}

const Tab: FC<Props> = ({
  title,
  identifier,
  CurrentTab,
  setCurrentTab,
  children,
}) => {
  return (
    <div
      className={`border-l-[1px] transition-all duration-200 ${
        CurrentTab === identifier ? "border-neutral-300" : "border-neutral-700"
      } relative px-5 lg:px-6 py-6`}
    >
      <div
        className={`absolute top-0 -left-[6px] aspect-square rounded-none w-3 transition-all duration-200  ${
          CurrentTab === identifier || CurrentTab === identifier - 1
            ? "bg-neutral-300"
            : "bg-neutral-700"
        }`}
      ></div>
      <h2
        className={`text-4xl lg:text-4xl cursor-pointer transition-all duration-200  ${
          CurrentTab === identifier ? "text-neutral-300 font-medium" : ""
        }`}
        onClick={() => {
          CurrentTab === identifier
            ? setCurrentTab(-1)
            : setCurrentTab(identifier);
        }}
      >
        {title}
      </h2>
      <AnimatePresence>
        {CurrentTab === identifier && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ delay: 0, duration: 0.2 }}
            layout
            className="h-min text-[12px] lg:text-sm mt-2 opacity-70 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tab;
