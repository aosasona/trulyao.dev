import { FC, ReactElement } from "react";

interface Props {
  url: string;
  icon: ReactElement;
}

const NavMenuIcon: FC<Props> = ({ url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-80 hover:text-white hover:opacity-100 transition-all"
    >
      {icon}
    </a>
  );
};

export default NavMenuIcon;
