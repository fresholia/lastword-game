import classNames from 'classnames';

import { CircleProgressProps } from './CircleProgress.types';

import './circle-progress.scss';
import useCircleProgress from './hooks/useCircleProgress';

function CircleProgress({
  percentage,
  className,
  children,
  size = 100,
  strokeWidth = 5,
  ...props
}: CircleProgressProps) {
  const { center, radius, circumference, progressOfset } = useCircleProgress({
    percentage,
    size,
    strokeWidth,
  });

  return (
    <div className={classNames('circle-progress', className)} {...props}>
      <svg className="is-centered" fill="none" width={size} height={size}>
        <circle
          className="circle-progress__svg-circle-bg"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={classNames('circle-progress__svg-circle-line', {
            'circle-progress__svg-circle-line--danger': percentage < 40,
          })}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOfset}
        />
      </svg>
      <div className="circle-progress__content">{children}</div>
    </div>
  );
}

export default CircleProgress;
