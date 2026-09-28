import { onLocaleChange, t } from '@/i18n';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = 'c5675803-a847-4734-8985-e1d36cbe8a68';
const SENDER_NAME = 'Portfolio · mikedev';

type StatusState = 'idle' | 'pending' | 'success' | 'error';

type Web3FormsAnswer = {
	success?: boolean;
	message?: string;
};

export function initContactForm(): void {
	const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
	if (!form) return;

	const status = form.querySelector<HTMLElement>('[data-contact-status]');
	const submit = form.querySelector<HTMLButtonElement>('[data-contact-submit]');
	const submitLabel = form.querySelector<HTMLElement>('[data-contact-submit-label]');

	if (!status || !submit || !submitLabel) return;

	let sending = false;

	const setStatus = (text: string, state: StatusState): void => {
		status.textContent = text;
		status.dataset.state = state;
	};

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		if (sending) return;

		if (!form.reportValidity()) return;

		const email = fieldValue(form, 'email');
		const subject = fieldValue(form, 'subject');
		const message = fieldValue(form, 'message');
		const botcheck = fieldValue(form, 'botcheck');

		clearFieldErrors(form);
		sending = true;
		submit.disabled = true;
		submitLabel.textContent = t('contact.pending');
		setStatus(t('contact.pending'), 'pending');

		try {
			const response = await fetch(WEB3FORMS_ENDPOINT, {
				method: 'POST',
				headers: { 'content-type': 'application/json', accept: 'application/json' },
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					name: email.split('@')[0] || email,
					email,
					subject,
					message,
					replyto: email,
					from_name: SENDER_NAME,
					botcheck,
				}),
			});

			const answer = ((await response.json().catch(() => null)) ?? {}) as Web3FormsAnswer;

			if (response.ok && answer.success) {
				form.reset();
				setStatus(t('contact.success'), 'success');
				return;
			}

			setStatus(answer.message ?? 'No pudimos enviar el mensaje. Inténtalo de nuevo.', 'error');
		} catch {
			setStatus(t('contact.networkError'), 'error');
		} finally {
			sending = false;
			submitLabel.textContent = t('contact.submit');
			submit.disabled = false;
		}
	});

	onLocaleChange(() => {
		if (status.dataset.state === undefined || status.dataset.state === 'idle') return;
		if (sending) return;
		if (status.dataset.state === 'success') status.textContent = t('contact.success');
	});
}

function fieldValue(form: HTMLFormElement, name: string): string {
	const field = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${name}"]`);
	return field?.value ?? '';
}

function clearFieldErrors(form: HTMLFormElement): void {
	form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[aria-invalid="true"]').forEach((field) => {
		field.removeAttribute('aria-invalid');
	});
}
