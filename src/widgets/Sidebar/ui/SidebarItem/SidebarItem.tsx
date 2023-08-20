import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';

interface ProfilePageProps{
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}>
      <AppLink
        className={cls.item}
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
      >
        <item.Icon className={cls.icon} />

        <span className={cls.link}>
          {t(item.text)}
        </span>
      </AppLink>
    </div>
  );
};
