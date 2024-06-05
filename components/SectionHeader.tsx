import React, { FC } from "react";

interface Props {
  title: string;
}

const SectionHeader: FC<Props> = ({ title }) => {
  return (
    <div>
      <h1 className="header-text text-4xl lg:text-5xl">{title}</h1>
      <div className="header-line" />
    </div>
  );
};

export default SectionHeader;
