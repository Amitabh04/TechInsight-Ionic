<template>
  <ion-app>
    <ion-split-pane content-id="main">
      <ion-menu content-id="main" type="overlay">
     
        <ion-content>
          <ion-header>
            <ion-toolbar color="dark">
              <ion-img :src="imageConst.sidebarLogo"></ion-img>
            </ion-toolbar>
          </ion-header>
          <div class="profile-container">
            <ion-row colo="dark">
              <ion-col class="ion-justify-content-center ion-align-items-center">
                  <ion-avatar class="ion-align-self-center m-auto">
                      <img src="https://ui-avatars.com/api/?name=Mohammed+Akram">
                  </ion-avatar>
                  <ion-text>Mohammed Akram</ion-text>
                  <ion-row class="ion-margin-top"><i class="fa fa-sliders-h"></i> &nbsp; PAG CHECK IN</ion-row>
              </ion-col>
            </ion-row>
          </div>
          <ion-list id="inbox-list">
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <!-- <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon> -->
                <i class="fa fa-folder"></i>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
  
        </ion-content>
      </ion-menu>

        <ion-menu content-id="main" type="overlay" side="end" menu-id="rightBar" class="right-bar">
     
        <ion-content>

          <ion-list id="right-bar-list">
            <ion-menu-toggle auto-hide="false">
              <ion-item   detail="false" class="hydrated" lines="none">
                <ion-col>
                  <div class="ion-text-center">
                    <i class="fal fa-redo-alt"></i>
                  </div>
                  <ion-label class="ion-text-center">Refresh</ion-label>
                </ion-col>
              </ion-item>
              <ion-item   detail="false" class="hydrated" lines="none">
                <ion-col>
                  <div class="ion-text-center">
                    <i class="fal fa-cog"></i>
                  </div>
                  <ion-label class="ion-text-center">Setting</ion-label>
                </ion-col>
              </ion-item>
              <ion-item   detail="false" class="hydrated" lines="none" @click="logout">
                <ion-col>
                  <div class="ion-text-center">
                    <i class="fal fa-sign-out-alt"></i>
                  </div>
                  <ion-label class="ion-text-center">Logout</ion-label>
                </ion-col>
              </ion-item>
              <ion-item   detail="false" class="hydrated" lines="none">
                <ion-col>
                  <div class="ion-text-center">
                    <i class="fal fa-power-off"></i>
                  </div>
                  <ion-label class="ion-text-center">Exit</ion-label>
                </ion-col>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      
      <ion-router-outlet id="main"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import imageConst from "./assets"
import { store } from './store';
import { AUTH_MUTATIONS } from './store/user/auth/mutations';
import router from './router';

export default defineComponent({
  name: 'App',
  components: {
    IonApp, 
    IonContent, 
    // IonIcon, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonMenu, 
    IonMenuToggle, 
    IonRouterOutlet, 
    IonSplitPane,
  },
  methods: {
    logout() {
            store.commit(AUTH_MUTATIONS.AUTH_LOGOUT)
            router.push('/auth/login')
        },
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: 'Project',
        url: '/project',
        iosIcon: mailOutline,
        mdIcon: mailSharp
      },
      {
        title: 'Ticket',
        url: '/project/tickets',
        iosIcon: mailOutline,
        mdIcon: mailSharp
      },
    ];
    const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
    const route = useRoute();
    
    return { 
      selectedIndex,
      appPages, 
      labels,
      archiveOutline, 
      archiveSharp, 
      bookmarkOutline, 
      bookmarkSharp, 
      heartOutline, 
      heartSharp, 
      mailOutline, 
      mailSharp, 
      paperPlaneOutline, 
      paperPlaneSharp, 
      trashOutline, 
      trashSharp, 
      warningOutline, 
      warningSharp,
      isSelected: (url: string) => url === route.path ? 'selected' : '',
      imageConst
    }
  }
});
</script>

<style scoped>
.right-bar ion-content {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-bar {
    --width: 125px;
}
.item-inner {
  border-bottom: none !important;
}
ion-menu.md ion-item.selected {
  --background: #222937 !important;
  color: #C5D0E1;
}
ion-menu.md ion-item.selected ion-icon {
  color: #C5D0E1 !important;
}
ion-menu.md ion-item {
  --background: #222937 !important;
  color: #C5D0E1;
  border-bottom: solid 1px #3c415b !important;
}
ion-menu.md ion-item ion-icon {
  color: #C5D0E1 !important;
}
.profile-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 40%;
  color: #C5D0E1;
}
.m-auto {
  margin: auto;
}
ion-menu.md ion-content {
  --background: #222937;
  max-height: 100% !important;
}

ion-menu ion-grid {
  height: 30px;
}

ion-menu.md ion-content ion-list {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-header ion-toolbar ion-img {
  height: 40px;
}

ion-menu.md ion-list {
  padding: 20px 0;
  
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  /* border-bottom: 1px solid var(--ion-color-step-150, #3c415b); */
border-bottom: none;
  background-color: #222937;
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
}

ion-menu.md ion-list#right-bar-list {
  /* border-bottom: 1px solid var(--ion-color-step-150, #3c415b); */
  border-bottom: none;
  background-color: #222937;
}

ion-menu.md ion-list#right-bar-list ion-item{
  padding: 1.25em 0 !important;
  /* --padding-start: 0px !important;
  --padding-end: 0px !important; */
}

ion-menu.md ion-list#right-bar-list ion-item ion-col div {
  font-size: 2rem;
  font-weight: 600;
  min-height: 20px;
  color: #fff;
}

ion-menu.md ion-list#inbox-list ion-item ion-label {
  font-size: 0.9em;
  color: #fff;
}


ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>