import axios, { AxiosResponse } from "axios";


function getProjects () {
    try {
        return axios.post(`/projects`)
    } catch(e) {
       return Promise.reject(e)
    }
    
}


export {
    getProjects
}