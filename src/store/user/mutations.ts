import IUserState, { IUserProfile } from '@/models/IUser';
import { MutationTree } from 'vuex';

export const enum USER_MUTATIONS {
    USER_SET = "USER_SET"
}

export const userMutations: MutationTree<{ user: IUserState }> = {
    [USER_MUTATIONS.USER_SET](state, payload: IUserProfile) {
        state.user.profile = payload
    },
};