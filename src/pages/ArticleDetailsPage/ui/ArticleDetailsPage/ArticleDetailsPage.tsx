import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
      {t('Статья')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
