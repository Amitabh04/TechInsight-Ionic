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
            <ion-segment-button value="1" >
              <div style="border-bottom: solid 1px #52b6f9" class="ticket-inner">
              <ion-label>Check-in Request(New)</ion-label>
              </div>
            </ion-segment-button>
        <ion-segment-button value="2">
          <div style="border-bottom: solid 1px #52b6f9" class="ticket-inner">
              <ion-label>Rejected Check-in</ion-label>
              </div>
        </ion-segment-button>
        <ion-segment-button value="3">
          <div style="border-bottom: solid 1px #52b6f9" class="ticket-inner">
              <ion-label>Check-in Approval</ion-label>
              </div>
        </ion-segment-button>
      </ion-segment>
  </ion-toolbar>
  <ion-content class="ticket-content">
      <ion-card class="ticket-card">
        <div class="ticket-badge">check-in Request(New)</div>
        <ion-card-header>
          <ion-card-subtitle>13 hours ago</ion-card-subtitle>
          <div class="ticket-card-bottom">
            <ion-card-title>NM01021B-Anchor</ion-card-title>
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
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'TicketList',
    data () {
        return {
            segment: [
                { name: 'Check-In Request(New)', color: '#52b6f9' },
                { name: 'Check-In Approval', color: '#f39c12' },
                { name: 'Pre-Check', color: '#f39c12' },
                { name: 'Pre-Check Validation', color: '#f39c12' },
                { name: 'Nest-Active', color: '#e74c3c' },
                { name: 'Reject-Check Out', color: '#ff6a5a' }
            ],
            tickets: [
                { name: 'IE04443A-Anchor', color: '#52b6f9' },
                // { name: 'IE04443B-Anchor', color: '#f39c12' },
                // { name: 'IE04443C-Anchor', color: '#f39c12' },
                // { name: 'IE04443D-Anchor', color: '#f39c12' },
                // { name: 'IE04443E-Anchor', color: '#e74c3c' },
                // { name: 'IE04443F-Anchor', color: '#ff6a5a' }
            ]
        }
    },
    

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
.ticket-segment-container ion-segment ion-segment-button {
  color: #333;
  font-size: 12px;
  font-weight: 500;
  --padding-end: 0px !important;
}
.ticket-inner {
  text-align: center;
  padding-bottom: 5px;
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
  border-top: #52b6f9 solid 3px;
  margin-left: 10px;
  margin-right: 10px;
}

.ticket-badge {
  position: absolute;
  right: 0px;
  top:0px;
  padding-inline: 6px;
  background-color: #52b6f9;
  color: #fff;
  border-bottom-left-radius: 3px;
}

</style>
