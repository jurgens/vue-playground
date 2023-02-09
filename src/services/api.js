import axios from "axios"

axios.defaults.baseURL = "https://my.api.mockaroo.com"
axios.defaults.headers['X-API-KEY'] = 'fb5be590';

const instance = axios.create()

export default instance