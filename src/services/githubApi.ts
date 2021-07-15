import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.github.com',
  headers: {
    origin: '',
  },
});
