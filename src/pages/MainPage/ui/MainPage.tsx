import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { VStack } from 'shared/ui/Stack';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState<string|undefined>(undefined);

  return (
    <Page>
      {t('Главная')}
      <div>afasf</div>
      <div>afasf</div>
      <VStack>
        <div>afasf</div>
        <ListBox
          defaultValue="Выберите значение"
          onChange={(str) => setValue(str)}
          value={value}
          items={[
            { value: '1', content: '123' },
            { value: '2', content: 'as' },
            { value: '3', content: 'xcv', disabled: true },
            { value: '4', content: 'ewt' },
            { value: '5', content: 'tyjrthtrth' },
          ]}
        />
      </VStack>
      <div>afasf</div>
    </Page>
  );
};
export default MainPage;
