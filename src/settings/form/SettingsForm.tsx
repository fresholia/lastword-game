import { ChangeEvent } from 'react';
import Form from 'components/form/Form';
import RadioGroup from 'components/radio/RadioGroup';
import useGameStatus from 'game/hooks/useGameStatus';
import useDifficulty from 'settings/hooks/useDifficulty';

import './settings-form.scss';
import { GAME_DIFFICULTIES } from 'core/app/context/AppContext.types';
import useSounds from 'settings/hooks/useSounds';

function SettingsForm() {
  const { status } = useGameStatus();
  const { sounds, setSounds } = useSounds();
  const { difficulty, setDifficulty } = useDifficulty();

  const handleChangeDifficulty = (event: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(event.target.value as GAME_DIFFICULTIES);
  };

  const handleChangeSounds = (event: ChangeEvent<HTMLInputElement>) => {
    setSounds(event.target.value === 'on');
  };

  return (
    <Form className="settings-form is-flex-column is-centered">
      <Form.Label>Difficulty Level</Form.Label>
      <RadioGroup
        name="difficulty"
        defaultValue={difficulty}
        onChange={handleChangeDifficulty}
        isDisabled={status === 'playing'}>
        <RadioGroup.Item value={GAME_DIFFICULTIES.EASY}>Easy</RadioGroup.Item>
        <RadioGroup.Item value={GAME_DIFFICULTIES.MEDIUM}>Medium</RadioGroup.Item>
        <RadioGroup.Item value={GAME_DIFFICULTIES.HARD}>Hard</RadioGroup.Item>
      </RadioGroup>
      <Form.Label>Sounds</Form.Label>
      <RadioGroup name="sound" defaultValue={sounds ? 'on' : 'off'} onChange={handleChangeSounds}>
        <RadioGroup.Item value="on">On</RadioGroup.Item>
        <RadioGroup.Item value="off">Off</RadioGroup.Item>
      </RadioGroup>
    </Form>
  );
}

export default SettingsForm;
