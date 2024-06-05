import { FC } from "react";
import { useRouter } from "next/router";
import { BsClock } from "react-icons/bs";
import Moment from "react-moment";
const readingTime = require("reading-time");

interface Props {
  index: number;
  article: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    content?: {
      text?: string;
    };
  };
  ActiveComponent: number | null;
  onHover: () => void;
  onLeave: () => void;
}

const ArticleCard: FC<Props> = ({
  index,
  article,
  ActiveComponent,
  onHover,
  onLeave,
}) => {
  const router = useRouter();

  const defaultClass =
    "w-full flex flex-col gap-3 aspect-[9/11] bg-alt-dark rounded-sm drop-shadow-sm hover:bg-primary hover:text-alt-dark hover:scale-90 hover:skew-x-[1deg] px-8 py-10 lg:px-10 lg:py-10 transition-all duration-500 select-none rounded-md";
  const activeClass =
    ActiveComponent !== null && !(ActiveComponent === index)
      ? "faded-article"
      : "";
  const className = `${defaultClass} ${activeClass}`;

  return (
    <div
      className={className}
      onClick={() => router.push(`/blog/${article?.slug}`)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Moment
        format="MMMM DD, YYYY"
        className="font-thin text-xs text-faded text-ellipsis"
      >
        {article?.createdAt}
      </Moment>
      <h1 className="text-4xl lg:text-5xl font-medium">{article?.title}</h1>

      <div className="flex flex-col gap-y-6 mt-auto">
        <p className="text-xs text-faded">{article?.description}</p>
        <div className="flex items-center gap-2">
          <BsClock size={15} />
          <p className="text-xs">{readingTime(article?.content?.text).text}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
