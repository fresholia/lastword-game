import { ChangeEvent } from 'react';

import Form from 'components/form/Form';
import Button from 'components/button/Button';
import Input from 'components/input/Input';

import useGame from 'game/hooks/useGameStatus';
import useUsername from 'settings/hooks/useUsername';

import './login-form.scss';

function LoginForm() {
  const { username, setUsername } = useUsername();
  const { startGame } = useGame();

  /*
  NOTE:
    It doesn't seem logical to use this, I could get the input value
    from the form without keeping it on any state either but
    I needed to update the clickability of the button according
    to the instantaneous value of the input.
  */
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    setUsername(event.target.value);

  return (
    <Form className="login-form is-flex-column is-centered" onSubmit={startGame}>
      <Input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
        required
      />
      <Button type="submit" disabled={!username}>
        Play
      </Button>
    </Form>
  );
}

export default LoginForm;
