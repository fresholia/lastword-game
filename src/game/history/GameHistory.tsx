import classNames from 'classnames';
import List from 'components/list/List';
import Typography from 'components/typography/Typography';
import { PLAYER } from 'core/app/context/AppContext.types';
import useGameHistory from 'game/hooks/useGameHistory';
import useDifficulty from 'settings/hooks/useDifficulty';
import useUsername from 'settings/hooks/useUsername';

import './game-history.scss';

function GameHistory() {
  const { history } = useGameHistory();
  const { difficulty } = useDifficulty();
  const { username } = useUsername();

  return (
    <div className="game-history">
      <Typography as="h3" variant="h3" textWeight="bold">
        History
      </Typography>
      <List
        className={classNames('game-history__list', {
          'is-blurred': difficulty === 'hard',
        })}>
        {history.map(({ word, player }) => (
          <List.Item className="game-history__list-item has-space-between" key={word}>
            <Typography>{player === PLAYER.USER ? username : player}</Typography>
            <Typography>{word}</Typography>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default GameHistory;
