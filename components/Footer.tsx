import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import LinkIcon from "./LinkIcon";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-2 mt-6 mb-[5vh] lg:mb-[8vh]">
      <LinkIcon link="twitter.com/trulyao">
        <FaTwitter size={20} />
      </LinkIcon>
      <p className="text-[11px] lg:text-[13px]">
        Built by{" "}
        <a
          href="https://twitter.com/trulyao"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300"
        >
          Ayodeji
        </a>
      </p>
      <LinkIcon link="github.com/aosasona">
        <FaGithub size={20} />
      </LinkIcon>
    </footer>
  );
};

export default Footer;
