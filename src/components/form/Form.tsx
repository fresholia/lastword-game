import { FormEvent } from 'react';

import { FormProps } from './Form.types';
import FormLabel from './label/FormLabel';

function Form({ children, onSubmit, ...props }: FormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
}

Form.Label = FormLabel;

export default Form;
