interface GalleryImage {
	src: string;
	alt: string;
}

let lightbox: HTMLDialogElement | null = null;
let lightboxImage: HTMLImageElement | null = null;
let lightboxCounter: HTMLElement | null = null;
let lightboxImages: GalleryImage[] = [];
let lightboxIndex = 0;
let lightboxTrack: HTMLElement | null = null;
let lightboxTrigger: HTMLElement | null = null;

function prefersReducedMotion(): boolean {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function scrollTrackTo(track: HTMLElement, index: number): void {
	track.scrollTo({
		left: index * track.clientWidth,
		behavior: prefersReducedMotion() ? 'auto' : 'smooth',
	});
}

function updateLightbox(): void {
	if (!lightboxImage || !lightboxCounter) return;
	const current = lightboxImages[lightboxIndex];
	if (!current) return;
	lightboxImage.src = current.src;
	lightboxImage.alt = current.alt;
	lightboxCounter.textContent = `${lightboxIndex + 1} de ${lightboxImages.length}`;
}

function showImageAt(index: number): void {
	if (lightboxImages.length === 0) return;
	lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
	updateLightbox();
	if (lightboxTrack) {
		scrollTrackTo(lightboxTrack, lightboxIndex);
	}
}

function createButton(label: string, text: string, className: string): HTMLButtonElement {
	const button = document.createElement('button');
	button.type = 'button';
	button.className = className;
	button.setAttribute('aria-label', label);
	button.textContent = text;
	return button;
}

function createLightbox(): HTMLDialogElement {
	const dialog = document.createElement('dialog');
	dialog.id = 'project-lightbox';
	dialog.setAttribute('aria-label', 'Visor de imágenes del proyecto');

	const inner = document.createElement('div');
	inner.className = 'project-lightbox-inner';

	const figure = document.createElement('figure');
	figure.className = 'project-lightbox-figure';

	const image = document.createElement('img');
	image.className = 'project-lightbox-image';
	image.setAttribute('decoding', 'async');

	figure.appendChild(image);

	const bar = document.createElement('div');
	bar.className = 'project-lightbox-bar';

	const prev = createButton('Imagen anterior', '←', 'project-lightbox-btn');
	const counter = document.createElement('p');
	counter.className = 'project-lightbox-counter';
	const next = createButton('Imagen siguiente', '→', 'project-lightbox-btn');

	bar.appendChild(prev);
	bar.appendChild(counter);
	bar.appendChild(next);

	const close = createButton('Cerrar', '×', 'project-lightbox-btn project-lightbox-close');

	inner.appendChild(figure);
	inner.appendChild(bar);
	dialog.appendChild(inner);
	dialog.appendChild(close);

	prev.addEventListener('click', () => {
		showImageAt(lightboxIndex - 1);
	});
	next.addEventListener('click', () => {
		showImageAt(lightboxIndex + 1);
	});
	close.addEventListener('click', () => {
		dialog.close();
	});
	dialog.addEventListener('keydown', (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			showImageAt(lightboxIndex - 1);
		} else if (event.key === 'ArrowRight') {
			event.preventDefault();
			showImageAt(lightboxIndex + 1);
		}
	});
	dialog.addEventListener('click', (event: MouseEvent) => {
		// El envoltorio interno ocupa todo el diálogo, así que los clics en el
		// área vacía apuntan a `inner`, no al diálogo. Ambos cierran; la imagen
		// y los botones son descendientes más profundos y nunca cierran.
		if (event.target === dialog || event.target === inner) {
			dialog.close();
		}
	});
	dialog.addEventListener('close', () => {
		lightboxImages = [];
		lightboxIndex = 0;
		lightboxTrack = null;
		lightboxTrigger?.focus();
		lightboxTrigger = null;
	});

	document.body.appendChild(dialog);

	lightbox = dialog;
	lightboxImage = image;
	lightboxCounter = counter;
	return dialog;
}

function openLightbox(images: GalleryImage[], index: number, track: HTMLElement, trigger: HTMLElement): void {
	const dialog = lightbox ?? createLightbox();
	lightboxImages = images;
	lightboxIndex = index;
	lightboxTrack = track;
	lightboxTrigger = trigger;
	updateLightbox();
	if (!dialog.open) {
		dialog.showModal();
	}
}

export function initGalleries(): void {
	document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((track) => {
		const card = track.closest<HTMLElement>('.project-card');
		const counter = card?.querySelector<HTMLElement>('[data-gallery-counter]') ?? null;
		const expand = card?.querySelector<HTMLButtonElement>('[data-gallery-expand]') ?? null;
		const prev = card?.querySelector<HTMLButtonElement>('[data-gallery-prev]') ?? null;
		const next = card?.querySelector<HTMLButtonElement>('[data-gallery-next]') ?? null;
		const slides = Array.from(track.querySelectorAll<HTMLElement>('.project-card-slide'));
		const images: GalleryImage[] = slides.map((slide) => {
			const img = slide.querySelector<HTMLImageElement>('img');
			return {
				src: img?.getAttribute('src') ?? '',
				alt: img?.getAttribute('alt') ?? '',
			};
		});
		let index = 0;
		let scrollFrame = 0;

		const updateFromScroll = (): void => {
			scrollFrame = 0;
			const width = track.clientWidth;
			if (width <= 0) return;
			index = Math.round(track.scrollLeft / width);
			if (counter) {
				counter.textContent = `${index + 1}/${images.length}`;
			}
		};

		track.addEventListener(
			'scroll',
			() => {
				if (scrollFrame) return;
				scrollFrame = requestAnimationFrame(updateFromScroll);
			},
			{ passive: true },
		);

		if (expand) {
			const trigger: HTMLButtonElement = expand;
			trigger.addEventListener('click', () => {
				openLightbox(images, index, track, trigger);
			});
		}

		prev?.addEventListener('click', () => {
			if (images.length === 0) return;
			index = (index - 1 + images.length) % images.length;
			scrollTrackTo(track, index);
		});

		next?.addEventListener('click', () => {
			if (images.length === 0) return;
			index = (index + 1) % images.length;
			scrollTrackTo(track, index);
		});
	});
}
