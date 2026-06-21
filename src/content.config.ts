import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const base = {
  title: z.string(),
  date: z.coerce.date(),
  language: z.enum(['ru', 'en']).default('ru'),
};

export const collections = {
  voices: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/voices' }),
    schema: z.object({
      ...base,
      guestName: z.string().optional(),
      guestBio: z.string().optional(),
      audioEmbedUrl: z.string().optional(),       // fallback: iframe src URL
      buzzsproutPodcastId: z.string().optional(), // e.g. "1234567"
      buzzsproutEpisodeId: z.string().optional(), // e.g. "98765432"
      shortDescription: z.string().optional(),
      heroQuote: z.string().optional(),
      coverImage: z.string().optional(),
      episodeNumber: z.number().optional(),
      duration: z.string().optional(),            // e.g. "42 мин"
      keyQuotes: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      guestbookPrompt: z.string().optional(),
    }),
  }),

  stories: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
    schema: z.object({
      ...base,
      heroImage: z.string().optional(),
      intro: z.string().optional(),
      pullQuotes: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),

  table: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/table' }),
    schema: z.object({
      ...base,
      heroImage: z.string().optional(),
      shortMemory: z.string().optional(),
      ingredients: z.array(z.string()).optional(),
      method: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),

  guestbook: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/guestbook' }),
    schema: z.object({
      name: z.string(),
      location: z.string().optional(),
      date: z.coerce.date(),
      language: z.enum(['ru', 'en']).default('ru'),
    }),
  }),

  night: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/night' }),
    schema: z.object({
      ...base,
      heroImage: z.string().optional(),
      intro: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};
