import { ITicketRequest } from "@/models/ITicket";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

function getTicketSegment () {
    try {
        return axios.get(`/api/pci/statuses`)
    } catch(e) {
       return Promise.reject(e)
    }
}

function getTickets (params: any ) {
    try {
        return axios.get(`/api/pci/tickets`, params)
    } catch(e) {
       return Promise.reject(e)
    }
}

export {
    getTicketSegment,
    getTickets
}