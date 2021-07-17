import axios from 'axios';

export const alurakutApi = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${process.env.NEXT_PUBLIC_BASE_URL}`,
});
