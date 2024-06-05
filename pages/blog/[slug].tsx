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
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import {
  FaFacebookF,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

interface Props {
  article: any;
}

const SinglePost: NextPage<Props> = ({ article }) => {
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
          <Meta title={article.title} desc={article.description} />
          <AnimatePresence>
            {Nav && (
              <motion.div
                initial={{ opacity: 1, y: -150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -150 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full grid grid-cols-3 items-center bg-neutral-700 bg-opacity-25 backdrop-blur-md py-3 lg:py-4 px-3 lg:px-5 fixed top-0 z-[99]"
              >
                <Back url="/blog" />
                <h2 className="text-neutral-400 text-[16px] font-normal place-self-center">
                  {article.title}
                </h2>
                <p className="bg-neutral-800 text-neutral-500 text-[10px] px-2 py-[4px] self-center place-self-end">
                  {timeago.format(article.createdAt)}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <main className="w-[93%] lg:w-4/6 2xl:w-3/6 mx-auto mt-[6vh] lg:mt-[9vh]">
            <Back url="/blog" />
            <h1 className="text-5xl lg:text-7xl font-light my-5 first-letter:uppercase">
              {article.title}
            </h1>
            <div className="text-xs flex items-center justify-between my-2">
              <Moment
                format="MMM Do YYYY hh:mm"
                className="font-normal text-neutral-600"
              >
                {article.createdAt}
              </Moment>
              <p className="bg-neutral-800 text-neutral-500 text-[10px] px-2 py-[2px]">
                {readingTime(article.content).text}
              </p>
            </div>
            <section className="mt-2">
              <div className="text-[14px] leading-relaxed bg-neutral-800 bg-opacity-60 py-4 px-[13px] lg:py-8 lg:px-6 lg:leading-relaxed text-left lg:text-sm mt-5 backdrop-blur-md cursor-text">
                {parse(article.content)}
              </div>
            </section>
            <div className="bg-neutral-700 backdrop-blur-md bg-opacity-30 py-2">
              <h3 className="text-center py-1 text-xs font-light">
                Share To...
              </h3>
              <div className="flex justify-evenly pt-5 pb-6">
                <FacebookShareButton
                  url={`https://www.trulyao.dev/blog/${article.slug}`}
                  quote={article.title}
                >
                  <FaFacebookF size={19} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={`https://www.trulyao.dev/blog/${article.slug}`}
                  title={article.title}
                  related={["trulyao", "frikax", "breegehq"]}
                >
                  <FaTwitter size={19} />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={`https://www.trulyao.dev/blog/${article.slug}`}
                  title={article.title}
                  separator=" - "
                >
                  <FaWhatsapp size={19} />
                </WhatsappShareButton>
                <TelegramShareButton
                  url={`https://www.trulyao.dev/blog/${article.slug}`}
                  title={article.title}
                >
                  <FaTelegramPlane size={19} />
                </TelegramShareButton>
              </div>
            </div>
            <Footer />
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
  const query = await fetch(`${API_URL}/articles`);
  const response = await query.json();
  const paths = response.articles.map((article: any) => {
    const slug = article.slug;
    return {
      params: { slug },
    };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as IParams;
  const query = await fetch(`${API_URL}/article/${slug}`);
  const response = await query.json();
  // console.log(response);

  return {
    props: {
      article: response?.data || null,
    },
    revalidate: 10,
  };
};
export default SinglePost;
