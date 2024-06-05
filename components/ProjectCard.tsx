import React, { FC } from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

interface Props {
  name: string;
  description: string;
  github: string;
  website: string;
}

const ProjectCard: FC<Props> = ({ name, description, github, website }) => {
  return (
    <div className="w-full flex flex-col gap-4 bg-alt-dark rounded-sm drop-shadow-xl select-none aspect-video px-5 py-6 lg:px-7 lg:py-6 transition-all">
      <h3 className="text-3xl text-primary">{name}</h3>
      <p className="text-xs lg:text-sm text-faded">{description}</p>

      <div className="h-auto flex items-center justify-between lg:justify-end lg:gap-5 text-xs px-2 lg:px-3 lg:py-1 mt-auto">
        <a
          href={github}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2"
        >
          <BsGithub size={20} />
          <p>GitHub</p>
        </a>
        <a
          href={website}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-1"
        >
          <BsLink45Deg size={20} />
          <p>Website</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
