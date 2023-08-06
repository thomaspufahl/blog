import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.string().uuid(),
        recommended: z.boolean().default(false),
        author: z.string(),
        date: z.date(),
        lastmod: z.date(),
        title: z.string(),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        draft: z.boolean(),
    })




});





export const collections = {
  'blog': blogCollection,
};