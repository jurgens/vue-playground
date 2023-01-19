import axios from "axios";

const httpClient = axios.create();

export const httpGet = httpClient.get;
export const httpPost = httpClient.post;

export default httpClient;
