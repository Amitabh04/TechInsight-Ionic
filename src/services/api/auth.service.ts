import { IAuthLoginRequest } from "@/models/IAuth";
import axios, { AxiosResponse } from "axios";
import { config } from "../core/config";

function login (params: IAuthLoginRequest) {
    try {
        return axios.post(`${config.environment.LOCAL_SERVER_PATH}/token`, params)
    } catch(e) {
       return Promise.reject(e)
    }
    
}

export {
    login
}