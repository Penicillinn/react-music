import axios from 'axios';
import { BASE_URL,TIMEOUT } from './config';
export default function request(config) {
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: TIMEOUT
    })

    return instance(config);
}