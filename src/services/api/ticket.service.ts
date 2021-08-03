import axios, { AxiosResponse } from "axios";

function getTicketSegment () {
    try {
        return axios.post(`/pci/statuses`)
    } catch(e) {
       return Promise.reject(e)
    }
    
}

export {
    getTicketSegment
}