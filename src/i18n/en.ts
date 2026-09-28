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
		role: 'Systems Development, Support and Infrastructure Engineer',
		summary:
			'I designed and implemented internal solutions to automate processes, improve traceability and increase operational efficiency, including:',
		implementationsIntro: 'Internal implementations:',
		implementations: [
			'Fixed asset inventory system for the General Warehouse area, moving from spreadsheets to a legacy system and finally to my own modern web application. It manages the full traceability of the assets, from acquisition to final assignment, and records the responsible person and the exact location through its QR label, printed with a Zebra printer.',
			'Helpdesk platform with QR flow, Forms, Power Apps and Power Automate, plus dashboards in Power BI, which eliminated manual records for the Systems Department incidents.',
			'Appointment scheduling system for the Outpatient Consultation area.',
			'Labeling system for CEYE department instruments.',
		],
		bullets: [
			'Requirement analysis with key users and stakeholders to abstract business needs into functional solutions, delivering MVPs and iterative adjustments until adoption.',
			'Administration and deployment of Ubuntu servers with Apache, PostgreSQL and DNS to operate and maintain the internal applications and services I developed.',
			'Custom reports in Crystal Reports and SQL queries against the main ERP and HIS database to support audits, management and operational areas.',
			'Reduced licensing costs by 60% through technical analysis, negotiation and migration to self-managed solutions, including the implementation of Veeam Backup & Replication.',
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
