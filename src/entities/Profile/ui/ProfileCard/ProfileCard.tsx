import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void,
    onChangeLastname?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (currency?: Currency) => void,
    onChangeCountry?: (country?: Country) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        className={classNames(cls.profileCard, { [cls.loading]: isLoading }, [className])}
        justify="center"
        max
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        className={classNames(cls.profileCard, {}, [className, cls.error])}
        justify="center"
        max
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла непредвиденная ошибка')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      className={classNames(cls.profileCard, mods, [className])}
      gap="8"
      max
    >
      {data?.avatar && (
      <HStack
        className={cls.avatarWrapper}
        justify="center"
        max
      >
        <Avatar src={data.avatar} alt={t('Аватар')} size={150} />
      </HStack>
      )}
      <Input
        className={cls.input}
        value={data?.first}
        placeholder={t('Ваше имя')}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.Firstname"
      />
      <Input
        className={cls.input}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.Lastname"
      />
      <Input
        className={cls.input}
        value={data?.age}
        placeholder={t('Ваш Возраст')}
        onChange={onChangeAge}
        readonly={readonly}
        data-testid="ProfileCard.Age"
      />
      <Input
        className={cls.input}
        value={data?.city}
        placeholder={t('Город')}
        onChange={onChangeCity}
        readonly={readonly}
        data-testid="ProfileCard.City"
      />
      <Input
        className={cls.input}
        value={data?.username}
        placeholder={t('Введите имя пользователя')}
        onChange={onChangeUsername}
        readonly={readonly}
        data-testid="ProfileCard.Username"
      />
      <Input
        className={cls.input}
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
        onChange={onChangeAvatar}
        readonly={readonly}
        data-testid="ProfileCard.Avatar"
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
        data-testid="ProfileCard.Currency"
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
        data-testid="ProfileCard.Country"
      />
    </VStack>
  );
};
