import List from 'components/list/List';
import Typography from 'components/typography/Typography';

import { GAME_RULES } from './GameRules.constants';

import './game-rules.scss';

function GameRules() {
  return (
    <section className="game-rules">
      <Typography variant="h5" as="h1" textWeight="bold">
        Rules
      </Typography>
      <List className="is-flex-column game-rules__list">
        {GAME_RULES.map((rule, index) => (
          <List.Item key={rule}>
            <Typography variant="body" as="p">
              {`${index + 1}. ${rule}`}
            </Typography>
          </List.Item>
        ))}
      </List>
    </section>
  );
}

export default GameRules;
