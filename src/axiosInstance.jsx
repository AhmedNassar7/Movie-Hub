import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '4b5b646cf1188fd879572f7ebd8f8745'
    }
});

export default axiosInstance;
