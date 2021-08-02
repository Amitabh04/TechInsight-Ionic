export default interface IProjectState {
    profile: any
}

export interface IProject  {

        id: number,
        tenant_id: number,
        workflow_version_id: number,
        name: string,
        description: string,
        slug: string,
        twilio_phone_number: null,
        twilio_messasing_service_id: null,
        identity_separator: string,
        identity_primary: [],
        identity_secondary: null,
        identity_unique: boolean,
        assignee_type: {
            users: {
                allow: boolean,
                mutliselect: boolean
            },
            groups: {
                allow: boolean,
                mutliselect: boolean
            },
            companies: {
                allow: boolean,
                mutliselect: boolean
            }
        },
        notification_rules: {
            sms: {
                users: {
                    allow: boolean,
                    settings: {
                        owner: boolean,
                        assignee: boolean,
                        followers: boolean
                    }
                },
                groups: {
                    allow: boolean,
                    settings: {
                        only_favorites: boolean
                    }
                },
                companies: {
                    allow: boolean,
                    settings: {
                        only_favorites: boolean
                    }
                }
            },
            mail: {
                users: {
                    allow: boolean,
                    settings: {
                        owner: boolean,
                        assignee: boolean,
                        followers: boolean
                    }
                },
                groups: {
                    allow: boolean,
                    settings: {
                        only_favorites: boolean
                    }
                },
                companies: {
                    allow: boolean,
                    settings: {
                        only_favorites: boolean
                    }
                }
            }
        },
        font_awesome: string,
        image: null,
        color: string,
        widget_id: number,
        workflow_locked: number,
        last_workflow_change: string,
        created_at: string,
        updated_at: string,
        deleted_at: null,
        timezone: string,
        is_favourite: null,
        tenant: {
            id: number,
            name: string,
            slug: string
        }
}