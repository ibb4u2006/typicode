import axios, { AxiosHeaderValue, HeadersDefaults } from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

interface AxiosDefaultHeaders extends HeadersDefaults {
  'Content-Type': string;
  Accept: string;
  Authorization: string;
}

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
} as AxiosDefaultHeaders & {
  [key: string]: AxiosHeaderValue;
};

export default axiosClient;
