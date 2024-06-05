import type { FC } from "react";
import Link from "next/link";
import Moment from "react-moment";
const readingTime = require("reading-time");

interface Props {
  article: any;
}

const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <>
      <Link href={"/blog/" + article?.slug} passHref>
        <div className="aspect-square lg:aspect-auto flex flex-col gap-y-5 lg:gap-y-8 bg-neutral-900 bg-opacity-70 backdrop-blur-md py-8 lg:py-8 px-6 lg:px-6 text-left lg:text-sm cursor-pointer hover:scale-95 transition-all">
          <h1 className="text-5xl lg:text-5xl">{article?.title}</h1>

          <p className=" first-letter:uppercase my-0 Article-Description">
            {article?.description}
          </p>

          <div className="text-[11px] lg:text-xs flex items-center justify-between mt-auto">
            <Moment
              format="MMM Do YYYY"
              className="font-normal text-neutral-600"
            >
              {article?.createdAt}
            </Moment>
            <p className="text-neutral-600 px-2 py-[2px]">
              {readingTime(article?.content?.text).text}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArticleCard;
