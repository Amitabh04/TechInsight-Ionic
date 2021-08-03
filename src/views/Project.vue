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

<ion-content>
    <ion-list >
        <ion-item >
            <i class=" list-item fa fa-2x fa-fw fa-exchange"></i>
            <ion-label>
            <h1 class="header-text">PAG Check In</h1>
            <small>PAG Check In</small>
            </ion-label>
        </ion-item>

           <ion-item>
            <i class=" list-item fa fa-2x fa-fw fa-bug"></i>
              <ion-label>
            <h1 class="header-text">  TI ISSUE TRACKER</h1>
            <small>  Issue Tracker for IMNOS-TechInsights</small>
              </ion-label>
         
        </ion-item>
       
        <!-- <ion-item v-for="number in numbers"  :key="number">{{number}}</ion-item>  -->
    </ion-list>
</ion-content>


    <ion-footer  >
    <ion-toolbar class="text-icon-color">
     <ion-grid>
     <ion-row class="center-align">
         
         <ion-col size="1.6">
   <i class="fa fa-step-backward"></i>
         </ion-col>

         <ion-col  size="1.6">
             <i class="fa fa-caret-left"></i>
         </ion-col>

         <ion-col  size="1.6">
             <i class="fa fa-redo-alt"></i>
         </ion-col>



   <ion-col  size="4">
    <ion-select  interface="popover" value="1">
                        <ion-select-option selected>1</ion-select-option>
                        <ion-select-option >2</ion-select-option>
                        <ion-select-option >3</ion-select-option>
                        <ion-select-option >4</ion-select-option>
                </ion-select>
                    </ion-col>



         <ion-col  size="1.6">
             <i class="fa fa-caret-left"></i>
         </ion-col>

         <ion-col  size="1.6">
             <i class="fa fa-redo-alt"></i>
         </ion-col>

     </ion-row>
     </ion-grid>
                     
                   
    </ion-toolbar>
  </ion-footer>




 

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { 
  ellipsisHorizontal,
  ellipsisVertical, 
  helpCircle, 
  personCircle, 
  search, 
  star
} from 'ionicons/icons';

export default defineComponent({
    name: 'Project',
    data () {
        return {
      numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      ellipsisHorizontal,
      ellipsisVertical, 
      helpCircle, 
      personCircle, 
      search, 
      star
    
        }
    },
    methods:{
       
    }
});

</script>

<style lang="css">

ion-toolbar {
    max-height: 50px;
    width: 100%;
}



ion-title{
    text-align: center;
}

.text-icon-color{
    color: white;
}

ion-toolbar {
   --background: linear-gradient(to top,#2e3246 0,#242736 100%) !important;
}


ion-content{
 max-height: 500px;
   margin-bottom: 200px;
}

ion-footer{
position: fixed;
bottom: 0px;
 
}
ion-select{
  
  color: black;
    background-color: white;
    border-radius: 40%;
   
    max-height: 35px;
    max-width: 70px;
}

.footer-icon > i {
    position: relative;
    top: 5px;
   
}


.center-align{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.list-item{
    padding: 30px;
    margin-right: 20px;
    color:#d64541;
}

ion-item{
     vertical-align: middle;
}

</style>
