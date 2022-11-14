type UseCircleProgressProps = {
  percentage: number;
  size: number;
  strokeWidth: number;
};

function useCircleProgress({ percentage, size, strokeWidth }: UseCircleProgressProps) {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressOfset = circumference - (percentage / 100) * circumference;

  return {
    center,
    radius,
    circumference,
    progressOfset,
  };
}

export default useCircleProgress;
