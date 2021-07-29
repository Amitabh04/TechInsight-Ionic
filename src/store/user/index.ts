import { userActions as actions } from "./actions";
import { userMutations as mutations } from "./mutations";
import { userState as state } from "./state";
const storeUser = {
    actions,
    mutations,
    state,
}
export default storeUser;