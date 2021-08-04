import axios, { AxiosResponse } from "axios";


function getProjects () {
    try {
        return axios.get(`/api/projects`)
    } catch(e) {
       return Promise.reject(e)
    }
    
}


export {
    getProjects
}