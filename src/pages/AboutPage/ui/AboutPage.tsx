import {useTranslation} from 'react-i18next';

export function AboutPage() {
	const {t} = useTranslation('about');

	return (
		<div>{t('О сайте')}</div>
	);
}
