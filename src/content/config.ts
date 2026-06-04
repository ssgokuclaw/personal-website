import { defineCollection, z } from 'astro:content';

const writingSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.string().optional(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  type: z.enum(['post', 'lab']),
  workflow: z.string().optional(),
  workflowStatus: z.string().optional(),
});

export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: writingSchema,
  }),
  lab: defineCollection({
    type: 'content',
    schema: writingSchema,
  }),
};
