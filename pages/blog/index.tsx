import { NextPage, GetStaticProps } from "next";
import { motion } from "framer-motion";
import Meta from "@/defaults/Meta";
import Back from "@/components/Back";
import Footer from "@/components/Footer";
import { gql } from "graphql-request";
import graphcms from "services/graphql.service";
import ArticleCard from "@/components/ArticleCard";

interface Props {
  articles: any;
}

const Blog: NextPage<Props> = ({ articles }) => {
  const Articles = articles;

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Meta title="Blog" desc="A doorway into my mind." />
      <main className="w-[93%] lg:w-4/6 2xl:w-3/6 mx-auto mt-[4vh] lg:mt-[9vh]">
        <h1 className="text-6xl lg:text-7xl">Blog</h1>
        <p className="Albert-Sans text-[13px] lg:text-sm opacity-70 mb-6">
          A doorway to my mind, thoughts, experiences, ideas, visions and
          everything else. Why would be interested? I don&apos;t know but here
          you go.
        </p>
        <Back url="/" />
        <section>
          {Articles.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 mt-6 lg:mt-6 mb-[5vh]">
              {Articles.map((article: any, index: any) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
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
  const query = gql`
    {
      articles(orderBy: createdAt_DESC) {
        title
        description
        slug
        createdAt
        content {
          text
        }
      }
    }
  `;
  const response = await graphcms.request(query);

  return {
    props: {
      articles: response?.articles,
    },
    revalidate: 10,
  };
};
export default Blog;
