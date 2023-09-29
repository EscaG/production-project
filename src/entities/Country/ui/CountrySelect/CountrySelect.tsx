import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from '../../model/types/country';

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
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите страну')}
      options={options}
      value={value}
      readonly={readonly}
      onChange={onChangeHandler}
    />
  );
});
