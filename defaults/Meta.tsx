import Head from "next/head";
import React, { FunctionComponent } from "react";

type Props = {
  title: string | undefined;
  desc: string | undefined;
  keywords?: string | undefined;
};

const Meta: FunctionComponent<Props> = ({ title, desc, keywords }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#171717" />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/x-icon" href="/images/preview.jpg" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.trulyao.dev" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="/images/preview.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://www.trulyao.dev" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content="/images/preview.jpg" />

      <meta property="og:site_name" content="" />
      <meta property="og:site" content="" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="/images/preview.jpg" />
      <meta property="og:url" content="http://www.trulyao.dev" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Ayodeji",
  keywords: "ayodeji, osasona, software, developer, typescript, engineer, blog, php, mysql, python",
  desc: "Ayodeji - Software Developer",
};

export default Meta;
