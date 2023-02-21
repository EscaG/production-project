import React, { useState } from 'react';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >

      <div className={cls.items}>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Главная')}
          </span>
        </AppLink>

        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('О сайте')}
          </span>
        </AppLink>
      </div>

      <Button
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onToggle}
        size={ButtonSize.L}
        square
        type="button"
        data-testid="sidebar-toggle"
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>

    </div>
  );
};
