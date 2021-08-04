import { projectActions as actions } from "./actions";
import { projectMutations as mutations } from "./mutations";
import { projectState as state } from "./state";
const storeProject = {
    actions,
    mutations,
    state,
}
export default storeProject;