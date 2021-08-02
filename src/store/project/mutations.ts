import IProject from '@/models/IProject';
import { MutationTree } from 'vuex';

export const enum PROJECT_MUTATIONS {
    PROJECT_SET = "PROJECT_SET"
}

export const userMutations: MutationTree<{ user: IProject }> = {
    [PROJECT_MUTATIONS.PROJECT_SET](state, payload: IProject) {
        state.user.profile = payload
    },
};