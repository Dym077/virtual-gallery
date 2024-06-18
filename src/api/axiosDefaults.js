import axios from "axios";

axios.defaults.baseURL = 'https://drf-api1vg-e56998f2fbc1.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;