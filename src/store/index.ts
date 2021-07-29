import IRootState from '@/models/IRootState';
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store, MutationTree, ActionTree, } from 'vuex';
import storeAuth from './user/auth';
import VuexPersistence from 'vuex-persist'
import storeUser from './user';

const vuexLocal = new VuexPersistence<IRootState>({
    storage: window.localStorage
})
export const key: InjectionKey<Store<IRootState>> = Symbol();
export const store = createStore<IRootState>({ 
    state: {
        ...storeAuth.state,
        ...storeUser.state,
    }, 
    mutations: {
        ...storeAuth.mutations,
        ...storeUser.mutations
    },
    actions: {
        ...storeAuth.actions,
        ...storeUser.actions,
    },
    plugins: [vuexLocal.plugin]
});

export function useStore() {
    return baseUseStore(key);
}