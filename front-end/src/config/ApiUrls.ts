const BASE_URL = 'http://localhost:3000';

const API_ROUTES = {
  REGISTER: `${BASE_URL}/auth/signup`,
  LOGIN: `${BASE_URL}/auth/login`,
  ME: `${BASE_URL}/user/me`,
};

export default API_ROUTES;
