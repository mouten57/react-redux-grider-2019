import axios from 'axios';

const KEY = 'AIzaSyB0RJcYpqvhuM1UGkaN6wMIjOdJzU1a9SQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
