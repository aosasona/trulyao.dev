import { FC, ReactNode } from "react";

interface Props {
  children: any;
}

const HeroHeader: FC<Props> = ({ children }) => {
  return (
    <div className="select-none staatliches">
      {[...children].map((word, index) => (
        <span
          key={index}
          className="text-[17vw] lg:text-[6.75vw] font-bold hover:text-faded transition-all"
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default HeroHeader;
