import CircleProgress from 'components/circle-progress/CircleProgress';
import Typography from 'components/typography/Typography';
import { getPercentage } from 'core/utils/number/numberUtils';
import useGameConfig from 'settings/hooks/useGameConfig';

interface GameCountdownProps {
  time: number;
}

function GameCountdown({ time }: GameCountdownProps) {
  const { timeLimit } = useGameConfig();

  return (
    <div>
      <CircleProgress size={200} strokeWidth={20} percentage={getPercentage(time, timeLimit)}>
        <Typography variant="h1" textWeight="bold">
          {time}
        </Typography>
      </CircleProgress>
    </div>
  );
}

export default GameCountdown;
