import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import parse from "html-react-parser";
import { gql } from "graphql-request";
import graphcms from "@utils/request.util";
import Layout from "@defaults/Layout";

import Back from "@components/Back";
import { IArticle, IRecommendation } from "interfaces/article.interface";
import ArticleMeta from "@components/ArticleMeta";
import NextArticle from "@components/NextArticle";

interface Props {
  article: IArticle;
  recommendation: IRecommendation;
}

const ArticlePage: NextPage<Props> = ({ article, recommendation }) => {
  return (
    <Layout
      title={article?.title}
      description={article?.description}
      showFooter={true}
    >
      <main className="mt-[15vh] lg:mt-[15vh] 2xl:mt-[13vh] w-[95vw] lg:w-5/6 2xl:w-3/6 mx-auto px-3 max-w-[100vw] overflow-y-scroll">
        <div className="flex flex-col gap-5">
          <Back />
          <ArticleMeta article={article} />
          <h1 className="text-4xl lg:text-5xl font-normal">{article?.title}</h1>
        </div>

        <section className="text-[13px] text-primary text-opacity-60 font-thin leading-[1.75] mt-6 article-body">
          {parse(
            article?.content?.html?.replace(/<p><\/p>/g, "<br />") as string
          )}
        </section>

        <div className="mt-6">
          {recommendation?.title && (
            <NextArticle recommendation={recommendation} />
          )}
        </div>
      </main>
    </Layout>
  );
};

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

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx?.params as IParams;
  const query = gql`
    {
      article(where: { slug: "${slug}" }) {
          id
          title
          description
          slug
          content {
            html
            text
          }
          createdAt
      }
    }`;

  const response = await graphcms.request(query);

  // GET RECOMMENDATION
  const recommendationQuery = gql`
      {
        articles(
          orderBy: createdAt_DESC
          first: 1
          after: "${response?.article?.id}") 
        {
          title
          description
          slug
          createdAt
        }
      }
    `;
  const recommendationResponse = await graphcms.request(recommendationQuery);
  const recommendation = recommendationResponse?.articles;

  return {
    props: {
      article: response?.article || null,
      recommendation: recommendation[0] || null,
    },
    revalidate: 10,
  };
};

export default ArticlePage;
