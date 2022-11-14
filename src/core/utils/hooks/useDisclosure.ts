import { useCallback, useState } from 'react';

function useDisclosure(initialValue = false) {
  const [isVisible, setVisibility] = useState(initialValue);

  const open = useCallback(() => setVisibility(true), []);
  const close = useCallback(() => setVisibility(false), []);
  const toggle = useCallback(() => setVisibility((prev) => !prev), []);

  return { isVisible, open, close, toggle };
}

export default useDisclosure;
