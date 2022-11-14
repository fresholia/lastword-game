import { useRef, useState, useCallback, useLayoutEffect } from 'react';

type UseCountdownProps = {
  seconds: number;
  onEnd?: VoidFunction;
  onStart?: VoidFunction;
};

function useCountdown({ seconds, onEnd, onStart }: UseCountdownProps) {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);
  const [isActive, setIsActive] = useState(true);
  const interval = useRef<any>();

  const startCountdown = useCallback(() => {
    setIsActive(true);
    onStart?.();
  }, [setIsActive, onStart]);

  const resetCountdown = useCallback(() => {
    setRemainingSeconds(seconds);
  }, [setRemainingSeconds, seconds]);

  useLayoutEffect(() => {
    if (isActive) {
      interval.current = setInterval(() => {
        if (remainingSeconds > 0) {
          setRemainingSeconds((prev) => prev - 1);
        } else {
          clearInterval(interval.current);
          setIsActive(false);
          onEnd?.();
        }
      }, 1000);
    }
    return () => clearInterval(interval.current);
  }, [isActive, onEnd, setRemainingSeconds, remainingSeconds]);

  return { startCountdown, resetCountdown, remainingSeconds };
}

export default useCountdown;
