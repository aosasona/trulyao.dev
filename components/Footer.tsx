import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import NavMenuIcon from "./NavMenuIcon";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col lg:flex-row lg:items-center justify-center lg:justify-around gap-y-6 my-[5vh]">
      <div className="flex justify-evenly items-center lg:gap-x-10 py-4">
        <NavMenuIcon url="https://twitter.com/trulyao" icon={<FaTwitter size={23} />} />
        <NavMenuIcon url="https://github.com/aosasona" icon={<FaGithub size={23} />} />
      </div>
      <p className="text-center text-[11px] opacity-60">
        Designed & built by{" "}
        <a
          href="https://twitter.com/trulyao"
          target="_blank"
          rel="noreferrer noopener"
          className="text-white hover:text-neutral-400 hover:underline hover:underline-offset-2 transition-all"
        >
          Ayodeji
        </a>
      </p>
    </footer>
  );
};

export default Footer;
