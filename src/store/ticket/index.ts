import { ticketActions as actions } from "./actions";
import { ticketMutations as mutations } from "./mutations";
import { ticketState as state } from "./state";
const storeTicket = {
    actions,
    mutations,
    state,
}
export default storeTicket;