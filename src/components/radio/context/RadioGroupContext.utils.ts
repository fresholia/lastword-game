import { useContext } from 'react';
import { ContextUsedOutsideProviderError } from 'core/utils/error/ContextUsedOutsideProviderError';

import { RadioGroupContext } from './RadioGroupContext';

function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new ContextUsedOutsideProviderError(context);
  }

  return context;
}

export default useRadioGroupContext;
