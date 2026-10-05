# mikedev-portfolio

🌐 Live site → deployed on Cloudflare Workers/Pages · 💼 [LinkedIn](https://www.linkedin.com/in/mikehdez21/) · 💻 [GitHub](https://github.com/mikehdez21)

## Profile

Informatics Engineer graduated from the Universidad de Guadalajara with **3 years of experience** building scalable web applications, administering servers and databases, and automating processes with AI tooling. Based in **Jalisco, Mexico**.

## Experience

**Hospital San Serafín** — Systems Development, Support & Infrastructure Engineer (02/2024 – Present)

Internal tools I designed, built and deployed end to end:

- **Fixed asset inventory** for the General Warehouse — full traceability from acquisition to assignment, QR labels printed on a Zebra printer.
- **Helpdesk** with QR flow, Forms, Power Apps / Power Automate and Power BI dashboards.
- **Appointment scheduling** for the Outpatient Consultation area.
- **Instrument labeling** for the CEYE department.

Also: Ubuntu + Apache + PostgreSQL + DNS server administration, Crystal Reports and SQL reporting against the ERP/HIS databases, and a **60% cut in licensing costs** through migration to self-managed solutions (including Veeam Backup & Replication).

## Skills

| Area | Stack |
| --- | --- |
| Frontend | React, Next.js, Astro, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, Axios |
| Backend | PHP, Laravel, Node.js, NestJS, Express, REST APIs, WebSockets, Zod |
| Databases | PostgreSQL, SQLite, Supabase, Crystal Reports |
| AI & Harness | OpenCode, OpenAI, Claude Code, AI Agents, Agent Skills & Hooks, MCP Servers, Prompt Engineering |
| DevOps | AWS, Git, GitHub Actions, CI/CD, Apache, Ubuntu, Veeam, DBeaver |
| Deploys | Vercel, Railway, Render, Cloudflare, On-Premise |
| API clients | Postman, Thunder Client, Yaak |
| Testing | Vitest, React Testing Library, Cypress |

## Projects

- **AdminCare** — ERP-like internal platform for a hospital: warehouse and assets, CEYE instrument labeling, helpdesk and intranet.
  Stack: React · TypeScript · Laravel (PHP) · PostgreSQL

  The real project was developed and implemented on an **on-premise server** at Hospital San Serafín, so its repository is **private**. The public demo below is a copy with no real data and a similar feature set.

  _Demo: [admincare-demo.onrender.com](https://admincare-demo.onrender.com/login)_

## This site

Single-page, scroll-based portfolio. Astro 7 with the Cloudflare adapter, bilingual **ES / EN** with a language toggle, dark and light themes, animated tech background, collapsible sections, project lightbox gallery and a working contact form. Responsive from mobile to desktop.

### Structure

```
src/
├── components/     # navbar, home, about, experience, projects, skills, contact, footer
│   └── i18n/       # Text.astro / ListItem.astro render translation keys
├── content/projects/  # one .md per project per language (admincare.en.md, …)
├── i18n/           # dictionaries: en.ts, es.ts (+ index.ts, t() and tList())
├── pages/          # index.astro
├── scripts/        # theme, menu, i18n, gallery, section toggle, background
└── styles/         # global, main and per-component CSS (+ light theme variants)
public/             # static assets and the EN/ES PDF CVs
```