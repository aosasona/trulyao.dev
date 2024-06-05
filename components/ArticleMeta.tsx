import React, { FC } from "react";
import Moment from "react-moment";
const readingTime = require("reading-time");
import { BsCalendarEvent, BsClock } from "react-icons/bs";
import { IArticle } from "interfaces/article.interface";

interface Props {
  article: IArticle;
}

const ArticleMeta: FC<Props> = ({ article }) => {
  return (
    <div className="flex items-center gap-4 font-thin text-xs text-faded">
      <div className="flex items-center gap-2">
        <BsCalendarEvent size={14} />
        <Moment format="MMMM DD, YYYY" className="text-ellipsis">
          {article?.createdAt}
        </Moment>
      </div>

      <div className="flex items-center gap-2">
        <BsClock size={14} />
        <p className="text-xs">{readingTime(article?.content?.text).text}</p>
      </div>
    </div>
  );
};

export default ArticleMeta;
