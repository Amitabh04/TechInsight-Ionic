<template>
    <ion-toolbar class="text-icon-color">
    <ion-buttons slot="start">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>
    <ion-buttons slot="secondary">
      <ion-menu-button auto-hide="false" menu="rightBar"><i class="far fa-cog fa-lg"></i></ion-menu-button>
    </ion-buttons>
    <ion-title>Projects</ion-title>
  </ion-toolbar>
  <div class="ticket-top-contaiber">
      <ion-searchbar show-cancel-button="focus" placeholder="Search"></ion-searchbar>
       
  </div>
  <ion-toolbar class="ticket-segment-container">
  <ion-segment @ionChange="segmentChanged($event)" scrollable value="1">
            <ion-segment-button :value="i" v-for="(s, i) in segment" :key="i">
              <div :style="{'--color': s.color}" class="ticket-inner">
              <ion-label>Check-in Request(New)</ion-label>
              </div>
            </ion-segment-button>
      </ion-segment>
  </ion-toolbar>
  <ion-content class="ticket-content">
      <ion-card class="ticket-card" v-for="(t, i) in tickets" :key="i" :style="{'--color': t.ticket_status_color  }">
        <div class="ticket-badge" :style="{'--color': t.ticket_status_color}">{{t.ticket_status_name}}</div>
        <ion-card-header>
          <ion-card-subtitle>13 hours ago</ion-card-subtitle>
          <div class="ticket-card-bottom">
            <ion-card-title>{{t.ticket_identity}}</ion-card-title>
            <div class="ticket-actions">
              <div>
                <i class="fal fa-ellipsis-v"></i>
              </div>
            </div>
          </div>
        </ion-card-header>
      </ion-card>
  </ion-content>
</template>

<script lang="ts">
import { store, useStore } from '@/store';
import { TICKET_ACTIONS } from '@/store/ticket/actions';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'TicketList',
    data () {
        return {
            segment: store.state.ticket.segments,
            tickets: store.state.ticket.records.items
        }
    },
    setup () {
      const store = useStore();
      console.log('store', store.state);
      
      setTimeout(() => {
        store.dispatch(TICKET_ACTIONS.TICKET_GET_SEGMENT)
        store.dispatch(TICKET_ACTIONS.TICKET_GET)
      })
    }
    

});
</script>

<style lang="css">
.ticket-card-bottom {
  padding-block: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.ticket-actions {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: solid 1px #ccc;
}
.ticket-actions > div {
  position: relative;
  top: 10px;
  left: 45%;
  font-size: 16px;
  color: #000;
}
ion-content.ticket-content {
  padding: 16px !important;
}
.ticket-segment-container {
  --background: #fff !important;
  padding-bottom: 10px;
  border-bottom: #ccc solid 1px;
}
.ticket-segment-container ion-segment {
  color: #333;
  font-size: 12px;
  font-weight: 500;
  --padding-end: 0px !important;
   -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.ticket-segment-container ion-segment ion-segment-button {
  color: #333;
  font-size: 12px;
  font-weight: 500;
  --padding-end: 0px !important;
}
.ticket-inner {
  text-align: center;
  padding-bottom: 5px;
  border-bottom: 3px solid var(--color) !important;
}
.ticket-top-contaiber {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ticket-card ion-card-header ion-card-title {
  font-size: 15px;
}
.ticket-card ion-card-header ion-card-subtitle {
  font-size: 12px;
}
ion-segment ion-segment-button ion-label{
    color: #000;
}

ion-segment ion-segment-button{
    --indicator-color: none;
}

.ticket-card {
  border-top: var(--color) solid 3px;
  margin-left: 10px;
  margin-right: 10px;
}

.ticket-badge {
  position: absolute;
  right: 0px;
  top:0px;
  padding-inline: 6px;
  background-color: var(--color);
  color: #fff;
  border-bottom-left-radius: 3px;
}

</style>
