import { api } from '@/services';
import { ActionTree } from 'vuex';
import { TICKET_MUTATIONS } from './mutations';
import ITicketState, { ITicketRes, ITicketSegment } from '@/models/ITicket';


export const enum TICKET_ACTIONS { 
    TICKET_GET = 'TICKET_GET',
    TICKET_GET_SEGMENT = 'TICKET_GET_SEGMENT', 
}

export const ticketActions: ActionTree<{ ticket: ITicketState }, any> = {
 async [TICKET_ACTIONS.TICKET_GET_SEGMENT](store) {
      try {
          const { data }: { data: ITicketSegment } = await api.ticket.getTicketSegment()
          store.commit(TICKET_MUTATIONS.TICKET_SEGMENT_SET, data)
      } catch (e) {
        // catch
        
      }    
  },
  async [TICKET_ACTIONS.TICKET_GET](store) {
    try {
        const { data }: { data: ITicketRes } = await api.ticket.getTickets({ jsonObject: {"lat":25.1756544,"lng":75.8513664,"take":20,"skip":0,"page":1,"pageSize":20,"sort":[{"field":"ticket_updated_at","dir":"desc"}],"filter":{"logic":"and","filters":[{"field":"ticket_status_id","operator":"in","value":[151]},{"field":"ticket_archived","operator":"eq","value":[false,[564,565]]}]}} })
        store.commit(TICKET_MUTATIONS.TICKET_SET, data)
    } catch (e) {
      // catch
      
    }    
},
};
