import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  name: string;
  level: number;
  learning?: boolean;
}

const SkillsRating: FC<Props> = ({ name, level, learning = false }) => {
  const [showSkills, setShowSkills] = useState(false);

  const skillsPercent = ((level / 10) * 100).toFixed(0);

  return (
    <div
      className="bg-alt-dark px-4 lg:px-6 py-6 lg:py-6 rounded-sm drop-shadow-lg select-none"
      onDoubleClick={() => setShowSkills(!showSkills)}
    >
      <div className="h-auto flex justify-between items-center">
        <p className="text-sm text-primary">{name}</p>
        {learning && (
          <p className="w-max bg-neutral-800 text-neutral-500 text-[10px] font-normal px-3 py-1">
            GETTING STARTED
          </p>
        )}
      </div>
      <AnimatePresence>
        {showSkills && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-[4px] bg-neutral-800 mt-6"
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: `${skillsPercent}%` }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full bg-faded absolute left-0 top-0 bottom-0"
              style={{ width: `${skillsPercent}%` }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsRating;
