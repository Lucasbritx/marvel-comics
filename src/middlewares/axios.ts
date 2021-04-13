import axios from 'axios';

const { REACT_APP_TIMESTAMP, REACT_APP_PUBLIC_KEY, REACT_APP_MD5  } = process.env;

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    ts: REACT_APP_TIMESTAMP,
    apikey: REACT_APP_PUBLIC_KEY,
    hash: REACT_APP_MD5,
  }
});

export default api;
