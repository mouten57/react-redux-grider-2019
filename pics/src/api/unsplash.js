import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID dafdeb1b3b7ba9c757557ec3e8d582d499fd85e80fa2df4f5bd81b21025a8ba1'
  }
});
