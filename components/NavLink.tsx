import Link from "next/link";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  url: string;
  variants: any;
}

const NavLink: FC<Props> = ({ children, url, variants }) => {
  return (
    <Link href={url}>
      <motion.div variants={variants} className="nav-link-container">
        <div className="nav-line" />
        <h1 className="text-3xl opacity-50 py-2">{children}</h1>
      </motion.div>
    </Link>
  );
};

export default NavLink;
