import classNames from 'classnames';

import useRadioGroup from '../hooks/useRadioGroup';
import { RadioGroupItemProps } from './RadioGroupItem.types';

import './radio-group-item.scss';

function RadioGroupItem({ children, value, className, ...props }: RadioGroupItemProps) {
  const { name, handleChange, value: defaultValue, isDisabled } = useRadioGroup();

  return (
    <label
      className={classNames(
        'radio-group-item__label',
        'is-centered',
        {
          'radio-group-item--is-disabled': isDisabled,
        },
        className,
      )}
      {...props}>
      <input
        type="radio"
        className="radio-group-item__input"
        name={name}
        value={value}
        onChange={handleChange}
        checked={defaultValue === value}
        disabled={isDisabled}
      />
      <span>{children}</span>
    </label>
  );
}

export default RadioGroupItem;
