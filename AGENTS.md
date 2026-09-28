## Portfolio frontend

- This repository is a personal portfolio built with Astro and a single-page, scroll-based structure.
- Every frontend change must be responsive from mobile to desktop. Never introduce fixed-width layouts that require horizontal scrolling.
- Always review responsive behavior at mobile, tablet, and desktop widths before considering a frontend change complete.
- Use semantic HTML, accessible labels, visible focus states, and navigation links that work with the page section IDs.
- Keep the first implementation simple and progressive: prioritize structure and content before adding interactivity or visual effects.
- Don't do the build every prompt, only when user indicate it.
- Keep the rules of typescript, don't use any, and avoid disabling eslint rules unless absolutely necessary. If you must disable a rule, add a comment explaining why.


## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

### Free Models — Alternative (only when the user indicates)

| Agent | Primary | Fallback sequence | Use for |
|---|---|---|---|
| `orchestrator` | `opencode/space-bunny-free` (variant `medium`) | `opencode/big-pickle` -> `opencode/mimo-v2.6-flash-free` | Deep reasoning, planning, and coordination |
| `backend-agent` | `opencode/big-pickle` | `opencode/muse-spark-1.3-contributor-free` -> `opencode/mimo-v2.6-flash-free` | Laravel, API, services, and backend implementation |
| `frontend-agent` | `opencode/muse-spark-1.3-contributor-free` | `opencode/mimo-v2.6-flash-free` -> `opencode/ling-3.0-flash-fin-free` | React, TypeScript, CSS, and UI implementation |
| `review-agent` (`reviewer-agent.md`) | `opencode/space-bunny-free` (variant `high`) | `opencode/big-pickle` -> `opencode/muse-spark-1.3-contributor-free` | Review, risk detection, and patches |
| `explorer-agent` | `opencode/ling-3.0-flash-fin-free` | `opencode/muse-spark-1.3-contributor-free` -> `opencode/mimo-v2.6-flash-free` | High-volume read-only exploration |
| `database-agent` | `opencode/mimo-v2.6-flash-free` | `opencode/big-pickle` -> `opencode/nemotron-3-ultra-free` | Schema design, migrations, and query debugging |