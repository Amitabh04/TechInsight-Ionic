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
            <ion-input placeholder="Email" type="email" v-model="email"></ion-input>
            </ion-col>
        </ion-row>
        </ion-card>

        <ion-card>
        <ion-row>
            <ion-col  class="input-field-box" size="2">   
              <i class="icons fa fa-lock"></i>
              </ion-col>
              <ion-col  size="10">
            <ion-input  placeholder="Password" type="password" v-model="password" required></ion-input>
            </ion-col>
        </ion-row>
        </ion-card>
     

<div class="center-align">
        <ion-checkbox></ion-checkbox>
        <ion-label>Remember me</ion-label>
</div >


  
   <ion-button @click= "login(email, password)"  fill="white">
          <i class="fas fa-sign-in"></i>
        Sign In</ion-button>

   <ion-label style="margin-top:20px;">{{email}}OR CONNECT WITH</ion-label>

     <ion-button fill="white" >
          <img src="../assets/img/office-365.png">
     </ion-button>
   
   </div>

    </ion-content>
</template>

<script lang="ts">



import { defineComponent } from 'vue';
import { config } from "@/services/core/config"
import { useStore } from '@/store';
import { AUTH_ACTIONS } from '@/store/user/auth/actions';

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
        //login()  {
            
            // console.log('email', store);
            // store.dispatch(AUTH_ACTIONS.AUTH_LOGIN, { email: this.email, password: this.password })
        // }
    },
    setup() {
        const store = useStore();
        console.log('store', store.state.auth);
        const login = (email: string, password: string) =>  store.dispatch(AUTH_ACTIONS.AUTH_LOGIN, { email, password })
 
        return {login}
    }
});
</script>

<style lang = "css" >

ion-col{
    text-align: start;
    
}


</style>
