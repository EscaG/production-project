import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return (
    <div>{t('О сайте')}</div>
  );
};

export default memo(AboutPage);
