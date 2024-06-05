import { FC, useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import NavMenu from "./NavMenu";

interface Props {
  title: string;
}

const Nav: FC<Props> = ({ title = "Home" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex fixed top-5 right-0 left-0 w-[93vw] lg:w-5/6 justify-between items-center mx-auto bg-[#222222] bg-opacity-80 backdrop-blur-md drop-shadow-md-lg rounded-sm py-5 lg:py-6 px-8 lg:px-10 z-[9999]">
        <div>
          <Link href="/">
            <h1 className="font-extrabold text-md lg:text-2xl">Ayodeji</h1>
          </Link>
        </div>
        <div className="lg:flex lg:items-center lg:gap-x-4 2xl:gap-x-8 hidden">
          <Link href="/">
            <div className="header-link" data-description="The neat homepage">
              Home
            </div>
          </Link>
          <Link href="/#about">
            <div
              className="header-link"
              data-description="What do you want to know?"
            >
              About
            </div>
          </Link>
          <Link href="/#skills">
            <div
              className="header-link"
              data-description="What do I think I know?"
            >
              Skills
            </div>
          </Link>
          {/* <Link href="/portfolio">
            <div className="header-link" data-description="Oops, not yet 🥲">
              Portfolio
            </div>
          </Link> */}
          <Link href="/#other-stuff">
            <div
              className="header-link"
              data-description="Personal stuff I worked on or contributed to - not commercial projects"
            >
              Other Stuff
            </div>
          </Link>
          <Link href="/blog">
            <div
              className="header-link"
              data-description="A gateway to my mind"
            >
              Blog
            </div>
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={handleMenuClick}
            className={`${isMenuOpen ? "rotate-[15deg]" : ""}`}
          >
            <BiMenuAltRight size={24} />
          </button>
        </div>
      </nav>
      <NavMenu isVisible={isMenuOpen} toggleVisibility={handleMenuClick} />
    </>
  );
};

export default Nav;
