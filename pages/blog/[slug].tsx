import { useEffect, useState } from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { API_URL } from "config/api";
import Back from "@/components/Back";
import Meta from "@/defaults/Meta";
import Moment from "react-moment";
import Footer from "@/components/Footer";
const readingTime = require("reading-time");
import parse from "html-react-parser";
import { ParsedUrlQuery } from "querystring";
import * as timeago from "timeago.js";
import { AnimatePresence, motion } from "framer-motion";
import QRCode from "react-qr-code";
import { gql } from "graphql-request";
import graphcms from "services/graphql.service";
import Share from "@/components/Share";
import RecCard from "@/components/RecCard";

interface Props {
  article: any;
  recommendations: any;
}

const SinglePost: NextPage<Props> = ({ article, recommendations }) => {
  const [Nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setNav(true);
      } else {
        setNav(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      {article ? (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Meta
            title={
              article?.title?.charAt(0)?.toUpperCase() +
              article?.title?.slice(1)
            }
            desc={article?.description}
          />
          <AnimatePresence>
            {Nav && (
              <motion.div
                initial={{ opacity: 1, y: -150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -150 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full grid grid-cols-3 items-center bg-[#111111] fixed top-0 drop-shadow-md z-[99] py-3 lg:py-4 px-3 lg:px-5"
              >
                <Back url="/blog" bg={false} />
                <h2 className="Albert-Sans text-neutral-400 text-[16px] font-medium place-self-center">
                  {article?.title}
                </h2>
                <p className="text-neutral-500 text-[10px] px-2 py-[4px] self-center place-self-end">
                  {timeago.format(article?.createdAt)}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <main className="w-[92%] lg:w-5/6 2xl:w-5/6 grid grid-cols-1 lg:grid-cols-12 lg:gap-5 mx-auto mt-[4vh] lg:mt-[7vh]">
            {/* MAIN ARTICLE */}
            <section className="w-full col-span-8 lg:px-3">
              <Back url="/blog" />
              <h1 className="text-5xl lg:text-7xl my-5 first-letter:uppercase">
                {article?.title}
              </h1>
              <div className="text-xs lg:text-sm flex items-center justify-between my-2">
                <Moment
                  format="MMM Do YYYY hh:mm"
                  className="font-normal text-neutral-600"
                >
                  {article?.createdAt}
                </Moment>
                <p className="bg-neutral-800 text-neutral-500 text-[10px] px-2 py-[2px]">
                  {readingTime(article?.content?.html).text}
                </p>
              </div>
              <section className="mt-1">
                <div className="Article-Body py-4 lg:py-8 text-left mt-2 cursor-text">
                  {parse(article?.content?.html)}
                </div>
              </section>

              {/* MOBILE - READ Next */}
              <section className="mt-1 lg:hidden">
                {recommendations.length > 0 && (
                  <>
                    <h1 className="text-2xl opacity-40">Read Next</h1>
                    {recommendations.map(
                      (recommendation: any, index: number) => (
                        <RecCard key={index} article={recommendation} />
                      )
                    )}
                  </>
                )}
                {/* SHARE */}
                <Share article={article} />
              </section>

              <Footer />
            </section>

            {/* DESKTOP */}
            <section className="col-span-4 hidden lg:block">
              {recommendations.length > 0 && (
                <>
                  <h1 className="text-2xl opacity-40 px-1">Read Next</h1>
                  {recommendations.map((recommendation: any, index: number) => (
                    <RecCard key={index} article={recommendation} />
                  ))}
                </>
              )}
              {/* SHARE */}
              <Share article={article} />

              <QRCode
                title={article?.title}
                value={`https://www.trulyao.dev/blog/${article?.slug}`}
                className="mx-auto my-6"
                fgColor="#404040"
                bgColor="#080808"
                level="L"
              />
            </section>
          </main>
        </motion.div>
      ) : (
        <main className="flex flex-col w-screen h-screen items-center justify-center space-y-5">
          <h1 className="text-7xl lg:text-[6.5rem] font-normal">Oops!</h1>
          <h4 className="w-[80%] mx-auto text-center text-xs">
            This piece only exists in limbo...
          </h4>
          <Back />
        </main>
      )}
    </>
  );
};

//  Interface for slug param
interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    {
      articles {
        slug
      }
    }
  `;
  const response = await graphcms.request(query);
  const paths = response.articles.map((article: any) => {
    const slug = article?.slug;
    return {
      params: { slug },
    };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx?.params as IParams;
  const query = gql`
  {
    article(where: {slug: "${slug}"}) {
        title
        description
        slug
        content {
          html
        }
        createdAt
    }
  }`;

  const response = await graphcms.request(query);

  // GET RECOMMENDATIONS
  const recommendationsQuery = gql`
    {
      articles(where: { slug_not: "${slug}" }, orderBy: createdAt_DESC, first: 1) {
        title
        description
        slug
        content {
          text
        }
        createdAt
      }
    }
  `;
  const recommendationsResponse = await graphcms.request(recommendationsQuery);
  const recommendations = recommendationsResponse.articles;

  return {
    props: {
      article: response?.article || null,
      recommendations: recommendations,
    },
    revalidate: 10,
  };
};
export default SinglePost;
