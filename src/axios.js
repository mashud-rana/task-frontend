import axios from "axios";
axios.defaults.withCredentials=true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}` 
axios.defaults.baseURL='http://localhost:8000'
