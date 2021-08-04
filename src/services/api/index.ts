import { IAuthCofigToken } from '@/models/IAuth';
import axios from 'axios';
import { config } from '../core/config';
import * as auth from './auth.service'
import * as user from './user.service'
import * as ticket from './ticket.service'
import * as project from './project.service'


export const apiInit = (autantication: IAuthCofigToken = { token: '' }) => {
    axios.defaults.baseURL = config.environment.LOCAL_SERVER_PATH;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
console.log('autantication', autantication);

    if (autantication && autantication.token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${autantication.token}`;
    }
}


export {
    auth,
    user,
    ticket,
    project
}