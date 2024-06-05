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
    // ${
    //   CurrentTab === identifier ? "border-neutral-300" : "border-neutral-700"
    // }
    <div
      className={`transition-all duration-200 relative px-5 lg:px-6 py-6 ${
        CurrentTab === identifier ? "Active-Tab" : "Inactive-Tab"
      }`}
    >
      {/* <div
        className={`absolute -top-1 -left-[6px] aspect-square rounded-none w-3 transition-all duration-200  ${
          CurrentTab === identifier || CurrentTab === identifier - 1
            ? "bg-neutral-300"
            : "bg-neutral-700"
        }`}
      ></div> */}
      <h2
        title="Expand"
        className={`text-5xl lg:text-5xl cursor-pointer transition-all duration-200  ${
          CurrentTab === identifier ? "text-neutral-200 font-medium" : ""
        }`}
        onClick={() => {
          setCurrentTab(CurrentTab === identifier ? -1 : identifier);
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
            className="Albert-Sans h-min text-neutral-600 text-sm mt-2 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tab;
