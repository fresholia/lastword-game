import Page from 'components/page/Page';
import Typography from 'components/typography/Typography';

import GameRules from 'game/rules/GameRules';
import LoginForm from 'home/login-form/LoginForm';

import './login-page.scss';

function LoginPage() {
  return (
    <Page pageTitle="atolye15 | welcome">
      <Page.Content className="is-flex-column home-page__content">
        <Typography textWeight="bold" variant="h1" as="h1">
          lastword.game
        </Typography>
        <Typography
          className="home-page__description is-centered-text"
          variant="body"
          as="h2"
          textColor="secondary-text">
          In the last word game, you derive a new name with the last letter of the word spoken by
          the other party.
        </Typography>
        <LoginForm />
        <GameRules />
      </Page.Content>
    </Page>
  );
}

export default LoginPage;
