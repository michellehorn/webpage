import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.github.com/`
});

const getLanguages = (project_name: string) =>
  api.get(`repos/michellehorn/${project_name}/languages`);

export default api;
export { getLanguages };
