import axios from 'axios';

export default axios.create({
  baseURL: 'https://35cc-196-1-187-142.eu.ngrok.io/api/v1/',
  headers: {
    'content-type': 'application/json'
  }
});
