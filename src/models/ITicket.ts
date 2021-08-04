export default interface ITicketState {
        segments: any; //ITicketSegment[]
        records: any;
}


export interface ITicketRequest {
    lat:number
    lng:number
    take:number
    skip:number
    page:number
    pageSize:number
    sort:[
        {
            field:string 
            dir:string
        }
    ],
    filter:{
    logic:string
    filters:[
            {
                field:string
                operator: string
                value:number[]
            },
                {
                    field:string
                    operator:string
                    value:any
                }
            ]
    }
}

export interface ITicketRes {
    items: ITicketItem[]
    total: number
    totals: IticketTotal[]
}

export interface IticketTotal {
    ticket_status_id: number
    tickets_count: number
}

export interface ITicketItem {
    id: number
    last_status_update: string
    locked:string | null
    market_timezone: string
    pag_status: string | null
    severity: number
    ticket_created_at: string
    ticket_identity: string
    ticket_market_name: "NM"
    ticket_owner_avatar: string
    ticket_owner_id: number
    ticket_owner_name: string
    ticket_status_color: string
    ticket_status_id: number
    ticket_status_name: string
    ticket_status_percent: number
    ticket_updated_at: string
    tickets_data_pci_assignment_company: string
    tickets_data_pci_assignment_group: string
    tickets_data_pci_assignment_market: string
    tickets_data_pci_equipment_vendor: number
    tickets_data_pci_nest_in: string | null
    tickets_data_pci_sa: string
    tickets_data_pci_site_id: string
    tickets_data_pci_small_cell_suffix: string | null
    tickets_data_pci_sow_ip: string
    tickets_data_pci_type: number
    tickets_data_pci_un_nest: string | null
}


export interface ITicketSegment {
    cards: any[]
    color: string
    created_at: string
    deleted_at: string | null
    estimated_instatus_time: string | null
    forecast_next_status_id: string | null
    id: number
    name: string
    no_actions_message: string | null
    order: 20
    percent: 0
    phase: any
    phase_id: number
    slug: string
    standard_deviation: { [key in number]: number }
    subtitle: string | null
    ticket_type_id: number
    updated_at: string
    workflow_type: string   
}
