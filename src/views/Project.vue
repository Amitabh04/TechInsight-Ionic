<template>
  

 <ion-toolbar class="text-icon-color">
    <ion-buttons slot="start">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>
    <ion-buttons slot="secondary">
      <ion-button>
      <i class="far fa-cog fa-lg"></i>
      </ion-button>
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
     <ion-grid >
     <ion-row >
         
         <div class="footer-icon">
             
   <i class=" icon-color fas fa-step-backward"></i>
       
         </div>

         <div class="footer-icon" >
             <i  class="icon-color fas fa-caret-left"></i>
         </div>

 
         <div class="footer-icon" >
             <i class="icon-color fas fa-redo-alt"></i>
         </div>

   <ion-col size="2"></ion-col>

   <ion-col class="footer-icon" size="2">
    <ion-select  interface="popover" value="1">
                        <ion-select-option selected>1</ion-select-option>
                        <ion-select-option >2</ion-select-option>
                        <ion-select-option >3</ion-select-option>
                        <ion-select-option >4</ion-select-option>
                </ion-select>
                    </ion-col>

                    
                    <ion-col size="2"></ion-col>



          <div class="footer-icon" >
             <i class="icon-color fas fa-caret-right"></i>
          </div>

         <div class="footer-icon">
             <i class="icon-color fas fa-step-forward"></i>
         </div>

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
    max-width: 350px;
    
}

.footer-icon {
    height: 35px;
    width: 35px;
    border-radius: 17.5px;
    text-align: center;
    align-items: center;
    display: flex;
    background-color: #fff;
    justify-content: center;
    
    /* justify-content: center; */

}

.pagination-icons{

  display: flex;
  justify-content: center;
  align-items: center;
 


}


.center-align{
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item{
    padding: 30px;
    margin-right: 20px;
    color:#d64541;
}

ion-item{
     vertical-align: middle;
}

.icon-color{
  color: black;
  max-height: 35px;
  max-width: 35px;
}

.icon-background{
  color: red;
  background-color: white;
  max-height: 50px;
  max-width: 50px;
  text-align: center;
}
.div-margin{}


</style>
