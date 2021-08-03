import IAuthState from "./IAuth";
import IUserState from "./IUser";
import ITicketState from "./ITicket";

export default interface IRootState {
    auth: IAuthState;
    user: IUserState;
    ticket: ITicketState;
}