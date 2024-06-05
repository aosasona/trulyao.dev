import React, { FC } from "react";
import { useRouter } from "next/router";
import { IRecommendation } from "interfaces/article.interface";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface Props {
  recommendation: IRecommendation;
}

const NextArticle: FC<Props> = ({ recommendation }) => {
  const router = useRouter();
  return (
    <div className="flex w-full justify-end">
      <div
        className="w-max max-w-[70vw] flex flex-col items-start py-2 px-3"
        onClick={() => router.push(`/blog/${recommendation?.slug}`)}
      >
        <div className="flex items-center text-[10px]">
          <p>NEXT</p>
          <HiOutlineArrowNarrowRight size={16} />
        </div>
        <h3 className="text-faded text-lg font-normal">
          {recommendation?.title}
        </h3>
      </div>
    </div>
  );
};

export default NextArticle;
