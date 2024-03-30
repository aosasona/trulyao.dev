import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()).default([]).optional(),
		date: z.string().transform((str) => new Date(str)),
		description: z.string(),
		keywords: z.string(),
		draft: z.boolean().default(false),
	}),
});

const projectCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string().regex(/^[A-Za-z0-9-]+$/),
		description: z.string(),
		website_url: z.string().url().optional(),
		github_url: z.string().url().optional(),
		image: z.string().regex(/\.(png|jpg|jpeg|gif)$/),
		status: z.enum([
			"active",
			"unmaintained",
			"archived",
			"private",
			"deprecated",
		]),
	}),
});

export const collections = {
	blog: blogCollection,
	projects: projectCollection,
};
