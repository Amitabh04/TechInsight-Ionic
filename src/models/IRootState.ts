import IAuthState from "./IAuth";
import IUserState from "./IUser";
import ITicketState from "./ITicket";
import IProjectState from "./IProject";

export default interface IRootState {
    auth: IAuthState;
    user: IUserState;
    ticket: ITicketState;
    project: IProjectState;
}