import { FormLabelProps } from './FormLabel.types';

function FormLabel({ children, ...props }: FormLabelProps) {
  return <label {...props}>{children}</label>;
}

export default FormLabel;
