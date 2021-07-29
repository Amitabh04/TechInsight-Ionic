<template>
<ion-content  >

    <div class="login-view" >

       <div class="image" >
        <img src ="../assets/img/logo.png" >
        </div>
       <ion-card>
        <ion-row>
            <ion-col  class="input-field-box" size="2">   
              <i class="icons fa fa-envelope" ></i>
           
              </ion-col>
              <ion-col  size="10">
            <ion-input  placeholder="Email" type="email"></ion-input>
            </ion-col>
        </ion-row>
        </ion-card>

        <ion-card>
        <ion-row>
            <ion-col  class="input-field-box" size="2">   
              <i class="icons fa fa-lock"></i>
              </ion-col>
              <ion-col  size="10">
            <ion-input  placeholder="Password" type="password"></ion-input>
            </ion-col>
        </ion-row>
        </ion-card>
     

<div class="center-align">
        <ion-checkbox></ion-checkbox>
        <ion-label>Remember me</ion-label>
</div >

   <ion-button  fill="white">
      
       Sign In</ion-button>

   <ion-label style="margin-top:20px;">OR CONNECT WITH</ion-label>

     <ion-button fill="white" >
          <img src="../assets/img/office-365.png">
     </ion-button>
   
   </div>

    </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { config } from "@/services/core/config";

export default defineComponent({
    name: 'Login',
    data() {
        return {
            version: `${config.version}${config.environment.ENVIRONMENT}`,
            email: '',
            password: '',
        }
    },
     methods: {
      
    }
  
    
});
</script>

<style lang = "css" >

ion-col{
    text-align: start;
    
}


</style>
