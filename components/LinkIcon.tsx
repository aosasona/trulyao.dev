import { FC } from "react";

interface Props {
  children: any;
  link: string;
}

const LinkIcon: FC<Props> = ({ children, link }) => {
  return (
    <>
      <a
        href={"https://" + link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-neutral-800 bg-opacity-40 backdrop-blur-md lg:border-[1px] lg:border-neutral-500 p-3 hover:bg-neutral-500 hover:text-neutral-900 transition-all"
      >
        {children}
      </a>
    </>
  );
};

export default LinkIcon;
