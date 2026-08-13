import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Sourcing Ally'),
    lang: z.enum(['en', 'es', 'pt', 'ru', 'tr']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
