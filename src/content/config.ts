import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]).optional(),
    date: z.date(),
    description: z.string(),
    keywords: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projectCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      name: z.string().regex(/^[A-Za-z0-9-\.\s]+$/),
      description: z.string(),
      website_url: z.string().url().optional().nullable(),
      github_url: z.string().url().optional().nullable(),
      image: z.string().regex(/\.(png|jpg|jpeg|gif)$/),
      tags: z.array(z.string().optional()),
      status: z.enum([
        "active",
        "unmaintained",
        "archived",
        "private",
        "deprecated",
        "wip"
      ]),
    }),
  ),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
