import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un proyecto tiene un archivo por idioma:
//   src/content/projects/admincare.en.md
//   src/content/projects/admincare.es.md
//
// `generateId` conserva el nombre completo (menos `.md`) para que el id sea único por
// idioma; si se deja el default, Astro deriva el slug de la carpeta y descarta una de
// las dos entradas. `project` es la clave que empareja los idiomas; `order` define la
// posición en la grilla.
const projects = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/projects',
		generateId: ({ entry }) => entry.replace(/\.md$/, ''),
	}),
	schema: z.object({
		project: z.string(),
		language: z.enum(['en', 'es']),
		order: z.number().default(99),
		title: z.string(),
		description: z.string(),
		technologies: z.array(z.string()).min(1),
		images: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string(),
				}),
			)
			.default([]),
		githubUrl: z.string(),
		demoUrl: z.string(),
		// `visible: false` deja la entrada en la collection sin renderizarla: útil para
		// proyectos que aún no tienen contenido ni enlaces reales.
		visible: z.boolean().default(true),
	}),
});

export const collections = { projects };
