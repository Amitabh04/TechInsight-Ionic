<template>
    <div class="side-bar" :class="{'show':show}">
        <div class="side-bar__overlay">
            <div class="side-bar__body">
           <header class="side-bar__header p-2">
               <img src="../../assets/img/sidebar-logo.png" />
            </header>

            <div class="side-bar__profile_container  d-flex p-10 flex-column justify-content-end align-items-center">
                <div class="side-bar__profile_img">
                    <img src="https://ui-avatars.com/api/?name=Mohammed+Akram" />
                </div>
                <small class="side-bar__profile_name">Mohammed Akram</small>
                <div class="side-bar__project_name">
                    <i class="fa fa-sliders-h"></i>&nbsp;
                    <span>TI ISSUE TRACKER</span>
                </div>
                
            </div> 

            <div class="side-bar__actions d-flex flex-column justify-content-start align-items-strat">
                <div class="menu p-2" @click.prevent="hideSheet">
                    <i class="fa fa-folder"></i>&nbsp;&nbsp;
                    <span>Projects</span>
                </div>
                <!-- <div class="side-bar__action" v-for="action in actions" :key="action" @click.prevent="executeAction(action)">
                    {{ action.label }}
                </div>
                <div class="side-bar__action side-bar__cancel" @click.prevent="hideSheet">
                    Cancel
                </div> -->
            </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SideBarObj } from '@/services/ui/sidebar.service'
import router from '@/router';

export default defineComponent({
    name: "SideBar",
    emits: ['close', 'open'],
    data: () => ({
        show: false,
        actions: []
    }),
    methods: {
        showSheet() {
            this.show = true;
            this.$emit('open')
        },
        hideSheet() {
            this.show = false;
            this.$emit('close')
            setInterval(() => {
                this.$.appContext.app.unmount();
                this.$el.remove();
            }, 2000);
            router.push('/project')
        },
        executeAction(action: SideBarObj) {
            action.handler({
                close: this.hideSheet,
                action
            })
        }
    }
});
</script>

<style lang="scss">
@import "src/theme/variables";

.side-bar {
    &__project_name {
        margin-top: 10px;
        font-size: 1rem;
        color: #fff;
    }
    &__profile_container {
        background-color: #222937 !important;
        text-align: center;
        height: 40%;
    }
    &__profile_img {
        border-radius: 50%;
        width: 3.35rem;
        height: 3.35rem;
        border: solid 1px #fff;
        background-color: #fff;
        color: #000;
        font-size: 1.5rem;
        align-items: center;
        text-align: center;
        overflow:hidden
    }
    &__profile_img > img {
        width: 3.35rem;
        height: 3.35rem;   
    }
    &__profile_name {
        color: #9AA0AD;
    }
    &__header {
        background-color: #222937 !important;
        z-index: $zindex-sheets;
        position: absolute;
        top: 0; left: 0; right: 0;
        text-align: center;
        border-bottom: solid 0.1px #fff;
        border-right: solid 0.1px #fff;
    }

    &__overlay {
        z-index: $zindex-sheets;
        position: fixed;
        top: 0; right: 0; bottom: 0; left: 0;
        background-color: rgba($dark, 0.5);
    }
    &__body {
        height: 100vh;
        background-color: #222937 !important;
        transform: translate(-100%);
        transition: all 1s ease;
        position: absolute;
        bottom: 0; left: 0; top: 10; right: 5vh
    }
    &__actions {
        height: 50%;
        border-top: solid 1px #3c415b;
        margin-top: 15px;
    }

    &__actions > .menu {
        border-bottom: solid 1px #3c415b;
        color: #C5D0E1;
        font-size:  1em;
    }

    &__action {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }

    &__cancel {
        margin-top: 20px;
    }

    &.show {
        .side-bar__body {
            transform: translateX(0);
        }
    }
}
</style>
