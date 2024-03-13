import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
};

export const ListBox = (props: ListBoxProps) => {
  const {
    className,
    direction = 'bottom right',
    items = [],
    value,
    defaultValue,
    onChange,
    readonly,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  const mods = (active: boolean, selected: boolean, disabled: boolean): Mods => ({
    [cls.active]: active,
    [cls.selected]: selected,
    [cls.disabled]: disabled,
  });

  return (
    <HListBox
      as="div"
      className={classNames(cls.ListBox, {}, [className])}
      value={value}
      onChange={onChange}
      disabled={readonly}
    >
      <HListBox.Button
        aria-disabled={readonly}
        className={cls.trigger}
      >
        <li>
          {value ?? defaultValue}
        </li>
      </HListBox.Button>
      <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
        {items?.map(({ value, content, disabled = false }) => (
          <HListBox.Option
            key={value}
            value={value}
            disabled={disabled}
            as={Fragment}
          >
            {({ active, selected }) => (
              <li
                className={classNames(cls.optionsItem, mods(active, selected, disabled))}
              >
                {content}
              </li>
            )}
          </HListBox.Option>
        ))}
      </HListBox.Options>
    </HListBox>
  );
};
