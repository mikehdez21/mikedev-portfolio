import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		technologies: z.array(z.string()).min(1),
		image: z.string(),
		imageAlt: z.string(),
		language: z.enum(['es', 'en']),
		slug: z.string(),
		featured: z.boolean().default(false),
	}),
});

export const collections = { projects };
