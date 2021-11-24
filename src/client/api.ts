import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://musicbrainz.org/ws/2',
});
