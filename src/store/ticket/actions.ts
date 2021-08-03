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
          store.commit(TICKET_MUTATIONS.TICKET_SET, data)
      } catch (e) {
        // catch
        
      }    
  },
};
