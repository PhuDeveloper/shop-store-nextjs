import axios from 'axios';
import { APP_CONFIG } from './env';
import Cookies from 'js-cookie';

const NOT_EXITS_KEY_CODE = 102;

const cookies = Cookies.get('token');

const httpClient = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    token: cookies,
  },
});

httpClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.data.code === NOT_EXITS_KEY_CODE) {
      location.href = `/?redirect=${location.href}`;
      return;
    }

    return Promise.reject(error);
  },
);

export async function getHttpClient() {
  return httpClient;
}
