import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Currency } from '../../model/types/currency';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps{
  className?: string;
  value?: Currency;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    readonly,
    onChange,
  } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <HStack
      className={classNames('', {}, [className])}
    >
      <span className={cls.label}>
        {`${t('Укажите валюту')} >`}
      </span>
      <ListBox
        value={value}
        items={options}
        defaultValue={t('Укажите валюту')}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    </HStack>
  );
});
