import IAuthState, { IAuthLoginRes } from '@/models/IAuth';
import { MutationTree } from 'vuex';

export const enum AUTH_MUTATIONS {
    AUTH_LOGIN_SUCCESS =  'AUTH_LOGIN_SUCCESS',
    AUTH_LOGOUT =  'AUTH_LOGOUT',
}

export const authMutations: MutationTree<{ auth: IAuthState }> = {
    [AUTH_MUTATIONS.AUTH_LOGIN_SUCCESS](state, payload: IAuthLoginRes) {
        const { id } = payload
        // state.auth.id = payload.id,
        state.auth.token = payload.api_token
    },
    [AUTH_MUTATIONS.AUTH_LOGOUT](state) {
        state.auth.token = ''
    }
};