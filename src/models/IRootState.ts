import IAuthState from "./IAuth";
import IUserState from "./IUser";

export default interface IRootState {
    auth: IAuthState;
    user: IUserState;
}