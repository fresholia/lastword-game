import Button from 'components/button/Button';
import SettingsModal from 'settings/modal/SettingsModal';
import { ReactComponent as SettingsIcon } from 'core/ui/icon/Settings.svg';
import './page-header.scss';
import useDisclosure from 'core/utils/hooks/useDisclosure';

function PageHeader() {
  const { isVisible, toggle, close } = useDisclosure();
  return (
    <header className="page-header is-centered has-space-between">
      <Button aria-label="Settings" onClick={toggle} buttonType="secondary">
        <SettingsIcon />
      </Button>
      <SettingsModal isOpen={isVisible} onClose={close} />
    </header>
  );
}

export default PageHeader;
