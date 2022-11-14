import classNames from 'classnames';

import { RadioGroupProps } from './RadioGroup.types';
import { RadioGroupContextProvider } from './context/RadioGroupContext';
import { initialRadioGroupState } from './context/RadioGroupContext.constants';

import './radio-group.scss';
import RadioGroupItem from './item/RadioGroupItem';

function RadioGroup({
  children,
  name,
  defaultValue = '',
  isDisabled = false,
  ...props
}: RadioGroupProps) {
  const initialValue = {
    ...initialRadioGroupState,
    name,
    isDisabled,
    value: defaultValue,
  };

  return (
    <RadioGroupContextProvider initialValue={initialValue}>
      <div
        className={classNames('radio-group_wrapper', 'is-centered', {
          'radio-group_wrapper--is-disabled': isDisabled,
        })}
        {...props}>
        {children}
      </div>
    </RadioGroupContextProvider>
  );
}

RadioGroup.Item = RadioGroupItem;

export default RadioGroup;
