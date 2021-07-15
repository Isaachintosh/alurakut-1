import axios from 'axios';

export const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
});
