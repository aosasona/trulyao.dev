import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsX } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import NavLink from "./NavLink";
import NavMenuIcon from "./NavMenuIcon";

interface Props {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const NavMenu: FC<Props> = ({ isVisible, toggleVisibility }) => {
  const containerVariant = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariant = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      x: -200,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: "100vw" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100vw" }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
          className="fixed w-screen h-screen top-0 left-0 bg-neutral-900 bg-opacity-95 backdrop-blur-sm z-[99999] lg:hidden"
        >
          <button
            name="close-modal"
            className="flex w-full justify-end py-5 px-5 hover:opacity-50"
          >
            <BsX size={29} onClick={toggleVisibility} />
          </button>
          <motion.div
            variants={containerVariant}
            initial="closed"
            animate="open"
            exit="closed"
            className="max-h-[65vh] flex flex-col gap-y-6 overflow-y-auto mt-6"
            onClick={toggleVisibility}
          >
            <NavLink url="/" variants={itemVariant}>
              Home
            </NavLink>
            <NavLink url="/#about" variants={itemVariant}>
              About
            </NavLink>
            <NavLink url="/#skills" variants={itemVariant}>
              Skills
            </NavLink>
            {/* <NavLink url="/portfolio" variants={itemVariant}>
              Portfolio
            </NavLink> */}
            <NavLink url="/#other-stuff" variants={itemVariant}>
              Other Stuff
            </NavLink>
            <NavLink url="/blog" variants={itemVariant}>
              Blog
            </NavLink>
          </motion.div>

          <motion.footer
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            className="w-full flex flex-col justify-center gap-y-4"
          >
            <div className="flex justify-evenly items-center py-4 mt-[10vh]">
              <NavMenuIcon
                url="https://twitter.com/trulyao"
                icon={<FaTwitter size={23} />}
              />
              <NavMenuIcon
                url="https://github.com/aosasona"
                icon={<FaGithub size={23} />}
              />
              <NavMenuIcon
                url="https://linkedin.com/in/aosasona"
                icon={<FaLinkedin size={23} />}
              />
            </div>
            <p className="text-center text-[11px] opacity-60">
              Built by{" "}
              <a
                href="https://twitter.com/trulyao"
                target="_blank"
                rel="noreferrer noopener"
                className="text-white hover:text-neutral-400 hover:underline hover:underline-offset-2 transition-all"
              >
                Ayodeji
              </a>
            </p>
          </motion.footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
