import useAppContext from 'core/app/context/AppContext.utils';

function useSettings() {
  const {
    state: { settings },
  } = useAppContext();

  return settings;
}

export default useSettings;
