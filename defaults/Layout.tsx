import type { FC, ReactNode } from "react";
import Meta from "@defaults/Meta";
import Nav from "@components/Nav";
import { firstLetterUpperCase } from "@utils/capital.util";
import Footer from "@components/Footer";

interface Props {
  title: string;
  description: string;
  showFooter?: boolean;
  children: ReactNode;
}

const Layout: FC<Props> = ({
  title,
  description,
  showFooter = false,
  children,
}) => {
  const NavTitle = firstLetterUpperCase(title);

  return (
    <>
      <Meta title={title} desc={description} />
      <Nav title={NavTitle} />
      <div>{children}</div>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
