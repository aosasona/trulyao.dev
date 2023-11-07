import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    keywords: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
