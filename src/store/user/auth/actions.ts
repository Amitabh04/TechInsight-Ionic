import IAuthState from '@/models/IAuth';
import { api } from '@/services';
import { ActionTree } from 'vuex';
import { AUTH_MUTATIONS } from './mutations';
import { IonButton, loadingController } from '@ionic/vue';
import { apiInit } from '@/services/api';
import router from '@/router';
import { USER_ACTIONS } from '../actions';


export const enum AUTH_ACTIONS { 
    AUTH_LOGIN = 'AUTH_LOGIN', 
}

export const authActions: ActionTree<{ auth: IAuthState }, any> = {
 async [AUTH_ACTIONS.AUTH_LOGIN](store, payload) {
      console.log('store', store, payload);
      let validate = true
      const loading = await loadingController
        .create({
          message: 'Please wait...',
        });
      try {
        if (!payload.email) {
          validate = false
          alert('Email required')
        } else if (!payload.password) {
          validate = false
          alert('Password required')
        }
        if (validate) {
          
          await loading.present();
          const { data } = await api.auth.login(payload);
          store.commit(AUTH_MUTATIONS.AUTH_LOGIN_SUCCESS, data)
          loading.dismiss()
          apiInit({ token: data.api_token })
          store.dispatch(USER_ACTIONS.USER_GET)

          //

          store.dispatch(USER_ACTIONS.USER_GET)
          //
          router.push('/project')
        }
        
      } catch (e) {
        if (e.response.status === 401) {
          loading.dismiss()
          alert('UserName or/and password are invalid!')
        }
        
      }    
  },
};
