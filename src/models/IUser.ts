export default interface IUserState {
        profile: any
}

export interface IUserProfile {
    id: number;
    first_name: string;
    last_name: string;
    full_name: string;
    avatar: string;
    email: string;
    phone_number: string;
    is_system_admin: boolean
    active: boolean
    timezone: [
        {
            id: string;
            name: string;
        }
    ],
    groups: any[]
    is_tenant_admin: boolean
    is_project_admin: boolean
    is_direct_member: boolean
    company_id: string
    company: any[]
    manager_id: any[]
    manager: any[]
}

