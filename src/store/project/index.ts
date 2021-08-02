import { userActions as actions } from "./actions";
import { userMutations as mutations } from "./mutations";
import { userState as state } from "./state";
const storeProject = {
    actions,
    mutations,
    state,
}
export default storeProject;