import { Button } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
