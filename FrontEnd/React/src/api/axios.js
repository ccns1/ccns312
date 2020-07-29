import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'http://localhost:8080/videochat', // axios 사용할 때 path앞에 baseURL이 항상 추가
});

export default axiosAPI;
