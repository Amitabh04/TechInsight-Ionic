import { authActions as actions } from "./actions";
import { authMutations as mutations } from "./mutations";
import { authState as state } from "./state";
const storeAuth = {
    actions,
    mutations,
    state,
}
export default storeAuth;