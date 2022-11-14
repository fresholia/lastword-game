const BASE_URL = '/';

const ROUTES = {
  LOGIN: `${BASE_URL}`,
  GAME: `${BASE_URL}game`,
  RESULT: `${BASE_URL}result`,
} as const;

export default ROUTES;
