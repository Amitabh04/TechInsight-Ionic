import axios, { AxiosResponse } from "axios";
import { config } from "../core/config";

function getUser () {
    try {
        return axios.post(`${config.environment.LOCAL_SERVER_PATH}/users/me`)
    } catch(e) {
       return Promise.reject(e)
    }
    
}


export {
    getUser
}


