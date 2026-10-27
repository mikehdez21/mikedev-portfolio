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
			'Diseñé e implementé "HSSAdminCare", una plataforma administrativa interna tipo ERP que consolida múltiples sistemas y servicios administrativos en una aplicación de página única (SPA) usando React, TypeScript, PHP/Laravel, PostgreSQL con esquemas múltiples y gestión on-premise sobre Ubuntu.',
		implementationsIntro: 'La plataforma incluye:',
		implementations: [
			'Módulo de Inventario de Activos Fijos: Gestión de proveedores, facturas, activos fijos, etiquetas QR impresas en impresoras Zebra, movimientos de activos, responsivas de activos, dashboards e inventarios escaneados.',
			'Módulo de Helpdesk: Ciclo de vida de tickets con categorías, notificación por email, prioridades, SLAs, asignación de múltiples técnicos, seguimiento de incidencias de proveedores externos y reportes en Power BI para gerentes.',
			'Módulo de Administración y RBAC: Catálogos de usuarios, empleados, roles, departamentos, ubicaciones y permisos granulares.',
			'Sistema de Agendado de Citas: Consulta externa e Imagen.',
			'Etiquetado de Instrumental Quirúrgico CEYE: Plantillas e impresión de etiquetas con impresora Zebra.',
		],
		bullets: [
			'Otras actividades: Generé reportes en Crystal Reports y análisis SQL; reduje en 60% los costos de licencias de mantenimiento mediante análisis técnico, renegociación y migración a soluciones autogestionadas, incluida la implementación de Veeam Backup & Replication para alta disponibilidad y recuperación ante desastres.',
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
