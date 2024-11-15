import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPanelPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Page>{t('Админ панель')}</Page>
  );
};

export default memo(AdminPanelPage);
