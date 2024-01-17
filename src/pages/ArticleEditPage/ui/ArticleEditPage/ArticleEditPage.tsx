import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-edit');
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page className={className}>
      {isEdit
        ? `${t('Редактирование статьи с')} ID = ${id}`
        : t('Создание новой статьи')}
    </Page>
  );
};

export default memo(ArticleEditPage);
