import type { FC } from "react";

interface Props {
  children: any;
  icon: any;
}

const ShareButton: FC<Props> = ({ children, icon }) => {
  return (
    <div className="flex items-center justify-start gap-x-2 text-neutral-600 bg-neutral-800 bg-opacity-50 hover:bg-opacity-10 transition-all py-3 px-4">
      <div>{icon}</div>
      <p className="text-base">{children}</p>
    </div>
  );
};

export default ShareButton;
