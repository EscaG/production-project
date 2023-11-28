import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';
import { useTranslation } from 'react-i18next';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (tab: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    onChangeType,
    value,
  } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все статьи'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
  ], [t]);

  const onTabClick = useCallback((type: TabItem) => {
    onChangeType(type.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
});
