import classNames from 'classnames';
import Button from 'components/button/Button';
import Page from 'components/page/Page';
import Typography from 'components/typography/Typography';
import { GAME_STATUS } from 'core/app/context/AppContext.types';
import GameHistory from 'game/history/GameHistory';
import useGameScore from 'game/hooks/useGameScore';

import useGameStatus from 'game/hooks/useGameStatus';
import useGameResult from 'result/hooks/useGameResult';

import './result-page.scss';

function ResultPage() {
  const { status, resetGame } = useGameStatus();
  const { reason } = useGameResult();
  const { user } = useGameScore();

  return (
    <Page pageTitle="atolye15 | results">
      <Page.Content className="result-page is-flex-column">
        <Typography variant="h1" as="h1" textWeight="bold">
          Game Results
        </Typography>
        <Typography
          className={classNames(
            {
              'has-peach-color': status === GAME_STATUS.LOST,
            },
            {
              'has-blueberry-color': status === GAME_STATUS.WON,
            },
          )}
          variant="h2"
          as="h2"
          textWeight="bold">
          {status === GAME_STATUS.WON ? 'You Won!' : 'You Lost!'}
        </Typography>

        <Typography variant="body" as="p" textWeight="bold">
          {reason}
        </Typography>

        <Typography variant="body" as="p" textWeight="bold">
          {`Score: ${user}`}
        </Typography>

        <Button onClick={resetGame}>Try again</Button>

        <GameHistory />
      </Page.Content>
    </Page>
  );
}

export default ResultPage;
