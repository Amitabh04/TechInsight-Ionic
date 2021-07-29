import { api } from '@/services';
import { ActionTree } from 'vuex';
import IUserState, { IUserProfile } from '@/models/IUser';
import { USER_MUTATIONS } from './mutations';


export const enum USER_ACTIONS { 
    USER_GET = 'USER_GET', 
}

export const userActions: ActionTree<{ user: IUserState }, any> = {
 async [USER_ACTIONS.USER_GET](store) {
      try {
          const { data }: { data: IUserProfile } = await api.user.getUser();
          store.commit(USER_MUTATIONS.USER_SET, data)
      } catch (e) {
        // catch
        
      }    
  },
};
