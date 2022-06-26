import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mrv-leads-api.azurewebsites.net/api',
});
