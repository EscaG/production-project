import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

export default function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная')}
      <BugButton />
    </div>
  );
}
