import { useTranslation } from 'react-i18next';
import { FC } from 'react';

export const AboutPage:FC = () => {
  const { t } = useTranslation('about');

  return (
    <div>{t('О сайте')}</div>
  );
};
