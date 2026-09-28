import type { Dictionary } from './en';

const es: Dictionary = {
	meta: {
		title: '@mikehdez21 | Portafolio',
		description:
			'Miguel Angel Rendon Hernandez — FullStack Developer. Sistemas, aplicaciones web e infraestructura, con desarrollo asistido por IA.',
	},

	nav: {
		brand: 'Miguel Angel Rendon Hernandez',
		about: 'Acerca',
		experience: 'Experiencia',
		projects: 'Proyectos',
		skills: 'Skills',
		contact: 'Contacto',
		menuOpen: 'Abrir menú',
		menuClose: 'Cerrar menú',
		themeToLight: 'Cambiar a modo claro',
		themeToDark: 'Cambiar a modo oscuro',
		languageToSpanish: 'Cambiar a español, actualmente inglés',
		languageToEnglish: 'Cambiar a inglés, actualmente español',
	},

	home: {
		role: 'FullStack Developer',
		assisted: 'Asistido',
		stack: 'React | TypeScript | Laravel PHP | PostgreSQL | NodeJS | NextJS | NestJS | Harness Engineering',
		introLead: 'Ingeniero en Informática con',
		introHighlight: '3 años de experiencia',
		introTail:
			'en el desarrollo completo de aplicaciones web con tecnologías modernas. Actualmente viviendo en Jalisco, México buscando oportunidades para contribuir a proyectos innovadores y seguir creciendo como profesional.',
		linksLabel: 'Enlaces profesionales',
		downloadCv: 'Descargar CV',
		sendEmail: 'Enviar correo',
	},

	about: {
		title: 'Acerca de mí',
		body: 'Egresado de la Universidad de Guadalajara como Ingeniero en Informática ya con 3 años de experiencia en el desarrollo de aplicaciones web escalables, administración de servidores, bases de datos y mejora continua de procesos mediante tecnologías de automatización e inteligencia artificial. Experiencia en el desarrollo e implementación de aplicaciones en entornos locales de desarrollo, pruebas y producción, tanto On-Premise como en la nube. Experiencia en la aplicación de agentes de Harness Engineering e IA para realizar mejoras, refactorizaciones y correcciones de errores, siguiendo una metodología de planificación previa, ejecución asistida por agentes y validación de cambios mediante revisión y pruebas manuales.',
	},

	experience: {
		title: 'Experiencia laboral',
		date: '02/2024 - Actual',
		company: 'Hospital San Serafín',
		role: 'Ingeniero en Desarrollo de Sistemas, Soporte e Infraestructura',
		summary:
			'Diseñé e implementé soluciones internas para automatizar procesos, mejorar la trazabilidad y aumentar la eficiencia operativa, incluyendo:',
		implementationsIntro: 'Implementaciones internas:',
		implementations: [
			'Sistema de gestión de inventario de activos fijos para el área de Almacén General, pasando de un uso en excel -> sistema legacy -> a mi sistema web moderno. Administra toda la trazabilidad de los activos, desde su adquisición hasta su asignación final, permitiendo saber su responsable y ubicación exacta con su etiqueta QR, impresa con impresora Zebra.',
			'Plataforma Helpdesk con flujo QR, Forms, Power Apps y Power Automate, más dashboards en Power BI, que eliminó los registros manuales de las incidencias del Departamento de Sistemas.',
			'Sistema de agendas de citas para el área de Consulta Externa.',
			'Sistema de emisión de etiquetas para el instrumental del departamento de CEYE.',
		],
		bullets: [
			'Análisis de requerimientos junto con usuarios clave y stakeholders para abstraer necesidades de negocio en soluciones funcionales, entregando MVPs y ajustes iterativos hasta su adopción.',
			'Administración y despliegue de servidores Ubuntu con Apache, PostgreSQL y configuración de DNS para servir y mantener las aplicaciones y servicios internos que desarrollé.',
			'Reportes personalizados en Crystal Reports y consultas SQL a la base de datos del ERP y HIS principal para apoyar auditorías, dirección y áreas operativas.',
			'Reducí costos de licencias en un 60% mediante análisis técnico, negociación y migración a soluciones autogestionadas, incluyendo la implementación de Veeam Backup & Replication.',
		],
	},

	projects: {
		title: 'Proyectos',
		code: 'Código',
		demo: 'Demo',
		galleryLabel: 'Galería de {count} capturas de {title}',
		expand: 'Ver {title} en grande',
		previous: 'Imagen anterior de {title}',
		next: 'Imagen siguiente de {title}',
		viewCode: 'Ver el código de {title} en GitHub',
		viewDemo: 'Ver la demo en vivo de {title}',
		previousShort: 'Imagen anterior',
		nextShort: 'Imagen siguiente',
		close: 'Cerrar',
		of: 'de',
		lightboxLabel: 'Visor de imágenes del proyecto',
	},

	skills: {
		title: 'Skills',
		groups: {
			frontend: 'Frontend',
			backend: 'Backend',
			databases: 'Base de Datos',
			ai: 'IA y Harness Engineering',
			devops: 'DevOps y Herramientas',
			deploys: 'Deploys y Plataformas',
			clients: 'Clientes API',
			testing: 'Testing',
		},
		labels: {
			agents: 'Agentes de IA',
			agentSkills: 'Agent Skills',
			hooks: 'Hooks de Agentes',
			mcp: 'Servidores MCP',
			prompts: 'Ingeniería de Prompts',
		},
	},

	contact: {
		title: 'Contacto',
		emailLabel: 'Correo',
		emailPlaceholder: 'tu@correo.com',
		subjectLabel: 'Asunto',
		subjectPlaceholder: '¿Sobre qué quieres escribir?',
		messageLabel: 'Mensaje',
		messagePlaceholder: 'Cuéntame tu necesidad, un proyecto, una duda…',
		honeypot: 'No dejes este campo vacío',
		submit: 'Enviar mensaje',
		pending: 'Enviando tu mensaje…',
		success: 'Mensaje enviado. Te responderé pronto.',
		networkError: 'No pudimos enviar el mensaje. Revisa tu conexión e inténtalo de nuevo.',
	},

	footer: {
		copy: '@ {year} Miguel Hernandez - Desarrollado con AstroJS',
		socialsLabel: 'Redes sociales',
	},

	section: {
		collapse: 'Contraer {title}',
		expand: 'Expandir {title}',
	},
};

export default es;
