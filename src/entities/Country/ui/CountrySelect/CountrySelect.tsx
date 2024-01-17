import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Country } from '../../model/types/country';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps{
  className?: string;
  value?: Country;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.England, content: Country.England },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.America, content: Country.America },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    readonly,
    onChange,
  } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <HStack
      className={classNames('', {}, [className])}
    >
      <span className={cls.label}>
        {`${t('Укажите страну')} >`}
      </span>
      <ListBox
        value={value}
        items={options}
        defaultValue={t('Укажите страну')}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    </HStack>
  );
});
