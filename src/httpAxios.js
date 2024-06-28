import axios from "axios";

const httpAxios = axios.create({
    baseURL: 'http://localhost/apiDoAn/public/api/',
    timeout: 90000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default httpAxios;