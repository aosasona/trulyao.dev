import { NextPage, GetServerSideProps, GetStaticProps } from "next";
import { API_URL } from "config/api";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Meta from "@/defaults/Meta";
import Back from "@/components/Back";
import Link from "next/link";
import Moment from "react-moment";
import Footer from "@/components/Footer";
const readingTime = require("reading-time");

interface Props {
  articles: any;
}

const Blog: NextPage<Props> = ({ articles }) => {
  const [Articles, setArticles] = useState(articles);

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Meta title="Blog" desc="A doorway into my mind." />
      <main className="w-[93%] lg:w-4/6 2xl:w-3/6 mx-auto mt-[4vh] lg:mt-[9vh]">
        <Back url="/" />
        <h1 className="text-5xl lg:text-7xl font-light">Blog</h1>
        <p className="text-xs lg:text-sm my-5">
          A doorway to my mind, thoughts, experiences, ideas, visions etc.
        </p>
        <section className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-3 mt-8 mb-[5vh]">
          {Articles.length > 0 ? (
            Articles.map((article: any, index: any) => (
              <Link key={index} href={"/blog/" + article.slug} passHref>
                <div className="bg-neutral-800 bg-opacity-50 py-6 px-5 lg:py-8 lg:px-6 font-light text-left lg:text-sm hover:border-[1px] hover:border-neutral-500 hover:drop-shadow-lg hover:-translate-y-2 transition-all backdrop-blur-lg cursor-pointer">
                  <h1 className="text-4xl lg:text-5xl mb-3">{article.title}</h1>

                  <div className="text-[10px] flex items-center justify-between my-2">
                    <Moment
                      format="MMM Do YYYY"
                      className="font-normal text-neutral-600"
                    >
                      {article.createdAt}
                    </Moment>
                    <p className="bg-neutral-800 text-neutral-500 px-2 py-[2px]">
                      {readingTime(article.content).text}
                    </p>
                  </div>
                  <p className="text-[12px] text-neutral-600 first-letter:uppercase my-1">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-max mx-auto bg-neutral-800 bg-opacity-70 text-center text-sm py-6 px-7 my-16">
              I promise I will make a post soon...
            </div>
          )}
        </section>
        <Footer />
      </main>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = await fetch(`${API_URL}/articles`);
  const response = await query.json();

  return {
    props: {
      articles: response.articles,
    },
    revalidate: 10,
  };
};
export default Blog;
