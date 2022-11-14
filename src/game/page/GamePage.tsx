import Typography from 'components/typography/Typography';
import Page from 'components/page/Page';
import Button from 'components/button/Button';

import useSpeechRecognition from 'core/utils/hooks/useSpeechRecognition';
import useUsername from 'settings/hooks/useUsername';
import useCurrentPlayer from 'game/hooks/useCurrentPlayer';
import useGameScore from 'game/hooks/useGameScore';

import GameHistory from 'game/history/GameHistory';
import GameCountdown from 'game/countdown/GameCountdown';
import useAnswer from 'game/hooks/useAnswer';
import useRoundLetter from 'game/hooks/useRoundLetter';

import { PLAYER } from 'core/app/context/AppContext.types';

import './game-page.scss';
import classNames from 'classnames';

function GamePage() {
  const { username } = useUsername();
  const { currentPlayer } = useCurrentPlayer();
  const { handleUserAnswer, remainingSeconds } = useAnswer();
  const { startRecording, isListening } = useSpeechRecognition({
    onEnd: handleUserAnswer,
  });
  const { letter } = useRoundLetter();
  const scores = useGameScore();

  const getButtonText = () => {
    let buttonText = '';

    if (currentPlayer === PLAYER.USER) {
      buttonText = isListening ? 'Listening...' : 'Press here to talk!';
    } else {
      buttonText = 'Waiting for your turn.';
    }

    return buttonText;
  };

  return (
    <Page pageTitle={`${username} > ${scores.user} vs ${scores.computer} < AI`}>
      <Page.Content className="game-page__content is-flex-column">
        <Typography className="game-page__title" variant="h1" as="h1" textWeight="bold">
          {currentPlayer === 'user' ? 'Your turn' : "Computer's turn"}
        </Typography>
        <Typography
          className={classNames('game-page__title-caption', {
            hide: currentPlayer === PLAYER.COMPUTER,
          })}
          variant="h3"
          as="h2">
          Your first letter is&nbsp;
          <strong>{letter}</strong>
        </Typography>
        <GameCountdown time={remainingSeconds} />
        <Button
          className="game-page__button"
          onClick={startRecording}
          buttonType={isListening ? 'secondary' : 'primary'}
          disabled={currentPlayer === 'computer'}>
          {getButtonText()}
        </Button>
        <GameHistory />
      </Page.Content>
    </Page>
  );
}

export default GamePage;
