<template>
        <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
   
});
</script>

<style lang="css">
.view {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.header {
    height: 64px;
    background-color: #dedede;
}

.content {
    flex: 1 0 calc(100vh - 128px);
    height: calc(100vh - 128px);
    overflow: hidden auto;
}

.footer {
    height: 64px;
    background-color: #dedede;
}

.long-content {
    height: 100%;
}
</style>
