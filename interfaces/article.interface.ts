export interface IArticle {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  content?: {
    html?: string;
    text?: string;
  };
}

export interface IRecommendation {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
}
