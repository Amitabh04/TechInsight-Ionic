export default interface IAuthState {
        token: string
        id?: number
        ide_settings?: string
        must_change_password?: boolean
}
export interface IAuthLoginRequest {
    email: string,
    password: string
}

export interface IAuthLoginRes {
    api_token: string
    first_name: string
    last_name: string
    id: number
    pic: string
    ide_settings: string | null
    must_change_password: boolean
}

export interface IAuthCofigToken {
    token: string
}
