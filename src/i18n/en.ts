const en = {
	meta: {
		title: '@mikehdez21 | Portfolio',
		description:
			'Miguel Angel Rendon Hernandez — FullStack Developer. Systems, web applications and infrastructure, with AI-assisted development.',
	},

	nav: {
		brand: 'Miguel Angel Rendon Hernandez',
		about: 'About',
		experience: 'Experience',
		projects: 'Projects',
		skills: 'Skills',
		contact: 'Contact',
		menuOpen: 'Open menu',
		menuClose: 'Close menu',
		themeToLight: 'Switch to light mode',
		themeToDark: 'Switch to dark mode',
		languageToSpanish: 'Switch to Spanish, current language English',
		languageToEnglish: 'Switch to English, current language Spanish',
	},

	home: {
		role: 'FullStack Developer',
		assisted: 'Assisted',
		stack: 'React | TypeScript | Laravel PHP | PostgreSQL | NodeJS | NextJS | NestJS | Harness Engineering',
		introLead: 'Informatic Engineer with',
		introHighlight: '3 years of experience',
		introTail:
			'in full-stack web development with modern technologies. Currently living in Jalisco, Mexico looking for opportunities to contribute to innovative projects and continue growing as a professional.',
		linksLabel: 'Professional links',
		downloadCv: 'Download CV',
		sendEmail: 'Send email',
	},

	about: {
		title: 'About me',
		body: 'Engineer graduated from the Universidad de Guadalajara as an Informatics Engineer with 3 years of experience in the development of scalable web applications, server administration, databases and continuous process improvement through automation and AI technologies. Experience developing and deploying applications across local development, staging and production environments, both on-premises and in the cloud. Experience applying Harness Engineering and AI agents to make improvements, refactors and bug fixes, following a methodology of prior planning, agent-assisted execution and validation of changes through manual review and testing.'
	},

	experience: {
		title: 'Work experience',
		date: '02/2024 - Present',
		company: 'Hospital San Serafín',
		role: 'Systems Development, Support, and Infrastructure Engineer',
		summary:
			'I designed and implemented "HSSAdminCare", an internal ERP-like administrative platform that consolidates multiple administrative systems and services into a single-page application using React, TypeScript, PHP/Laravel, multi-schema PostgreSQL and an on-premise Ubuntu deployment.',
		implementationsIntro: 'The platform includes:',
		implementations: [
			'Fixed Asset Inventory Module: Management of suppliers, invoices, fixed assets, QR labels printed on Zebra printers, asset movements, asset responsibility forms, dashboards and scanned inventories.',
			'Helpdesk Module: Ticket lifecycle with issue categories, email notification priorities, SLAs, multi-technician assignment, third-party provider incident tracking and Power BI reporting for managers.',
			'Administration RBAC Module: Catalogs of users, employees, roles, departments, locations and fine-grained permissions.',
			'Appointment Scheduling: External consultation and imaging.',
			'CEYE Instrument Labeling: Templates and label printing for surgical instruments.',
		],
		bullets: [
			'Other activities: Generated Crystal Reports and SQL analyses, reduced software licensing costs by 60% through technical analysis, renegotiation and migration to self-managed solutions, including Veeam Backup & Replication for high availability and disaster recovery.',
		],
	},

	projects: {
		title: 'Projects',
		code: 'Code',
		demo: 'Demo',
		galleryLabel: 'Gallery of {count} screenshots of {title}',
		expand: 'View {title} full size',
		previous: 'Previous image of {title}',
		next: 'Next image of {title}',
		viewCode: 'View the {title} code on GitHub',
		viewDemo: 'View the live {title} demo',
		previousShort: 'Previous image',
		nextShort: 'Next image',
		close: 'Close',
		of: 'of',
		lightboxLabel: 'Project image viewer',
	},

	skills: {
		title: 'Skills',
		groups: {
			frontend: 'Frontend',
			backend: 'Backend',
			databases: 'Databases',
			ai: 'AI and Harness Engineering',
			devops: 'DevOps and Tools',
			deploys: 'Deploys and Platforms',
			clients: 'API Clients',
			testing: 'Testing',
		},
		labels: {
			agents: 'AI Agents',
			agentSkills: 'Agent Skills',
			hooks: 'Agent Hooks',
			mcp: 'MCP Servers',
			prompts: 'Prompt Engineering',
		},
	},

	contact: {
		title: 'Contact',
		emailLabel: 'Email',
		emailPlaceholder: 'you@email.com',
		subjectLabel: 'Subject',
		subjectPlaceholder: 'What do you want to write about?',
		messageLabel: 'Message',
		messagePlaceholder: 'Tell me about your need, a project, a question…',
		honeypot: 'Leave this field empty',
		submit: 'Send message',
		pending: 'Sending your message…',
		success: 'Message sent. I will get back to you soon.',
		networkError: 'We could not send your message. Check your connection and try again.',
	},

	footer: {
		copy: '@ {year} Miguel Hernandez - Developed in AstroJS',
		socialsLabel: 'Social networks',
	},

	section: {
		collapse: 'Collapse {title}',
		expand: 'Expand {title}',
	},
};

export default en;
export type Dictionary = typeof en;
