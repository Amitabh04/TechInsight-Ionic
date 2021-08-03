import ITicketState, { ITicketRes, ITicketSegment } from '@/models/ITicket';
import { MutationTree } from 'vuex';

export const enum TICKET_MUTATIONS {
    TICKET_SET = "TICKET_SET",
    TICKET_SEGMENT_SET = "TICKET_SEGMENT_SET"
}

export const ticketMutations: MutationTree<{ ticket: ITicketState }> = {
    [TICKET_MUTATIONS.TICKET_SEGMENT_SET](state, payload: ITicketSegment[]) {
        state.ticket.segments = payload
    },
};