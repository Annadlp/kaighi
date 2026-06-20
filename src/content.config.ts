import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const voicesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/voices' }),
  schema: z.object({
    title: z.string(),
    guestName: z.string(),
    guestBio: z.string().optional(),
    language: z.enum(['ru', 'en']).default('ru'),
    date: z.date(),
    audioEmbedUrl: z.string().url(),
    shortDescription: z.string(),
    heroQuote: z.string().optional(),
    coverImage: z.string().optional(),
    keyQuotes: z.array(z.string()).default([]),
    transcript: z.string().optional(),
    links: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    guestbookPrompt: z.string().optional(),
  }),
});

const storiesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    language: z.enum(['ru', 'en']).default('ru'),
    type: z.enum(['essay', 'story', 'podcast-story', 'memory']).default('story'),
    heroImage: z.string().optional(),
    intro: z.string().optional(),
    pullQuotes: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const tableCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/table' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    language: z.enum(['ru', 'en']).default('ru'),
    heroImage: z.string().optional(),
    shortMemory: z.string(),
    ingredients: z.array(z.string()).default([]),
    method: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const guestbookCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/guestbook' }),
  schema: z.object({
    name: z.string(),
    location: z.string().optional(),
    date: z.date(),
    language: z.enum(['ru', 'en']).default('ru'),
  }),
});

export const collections = {
  voices: voicesCollection,
  stories: storiesCollection,
  table: tableCollection,
  guestbook: guestbookCollection,
};
