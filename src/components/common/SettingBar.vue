<template>
    <div class="setting-bar" :class="{'show':show}">
        <div class="setting-bar__overlay">
            <div class="setting-bar__body d-flex flex-column justify-content-center align-items-center">
        
            <div class="setting-bar__actions d-flex flex-column justify-content-center align-items-center">
                <div class="d-flex flex-column justify-content-center align-items-center menu p-3" @click.prevent="hideSheet">
                    <i class="fa fa-redo-alt"></i>
                    <span>Refresh App</span>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center menu p-3" @click.prevent="hideSheet">
                    <i class="fa fa-cog fa-lg"></i>
                    <span>Setting</span>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center menu p-3" @click.prevent="logout">
                    <i class="fa fa-sign-out-alt"></i>
                    <span>Logout</span>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center menu p-3" @click.prevent="hideSheet">
                    <i class="fas fa-power-off"></i>
                    <span>Exit App</span>
                </div>
                <!-- <div class="setting-bar__action" v-for="action in actions" :key="action" @click.prevent="executeAction(action)">
                    {{ action.label }}
                </div>
                <div class="setting-bar__action setting-bar__cancel" @click.prevent="hideSheet">
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
import { AUTH_MUTATIONS } from '@/store/user/auth/mutations';
import { store, useStore } from '@/store';
import router from '@/router';

export default defineComponent({
    name: "SettingBar",
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
        },
        logout() {
            this.show = false;
            store.commit(AUTH_MUTATIONS.AUTH_LOGOUT)
            router.push('/auth/login')
            this.$emit('close')
            setInterval(() => {
                this.$.appContext.app.unmount();
                this.$el.remove();
            }, 2000);
        },
        executeAction(action: SideBarObj) {
            action.handler({
                close: this.hideSheet,
                action
            })
        },
    }
});
</script>

<style lang="scss">
@import "src/theme/variables";

.setting-bar {
    &__overlay {
        z-index: $zindex-sheets;
        position: fixed;
        top: 0; right: 0; bottom: 0; left: 0;
        background-color: rgba($dark, 0.5);
    }
    &__body {
        height: 100vh;
        background-color: #222937 !important;
        transform: translate(100%);
        transition: all 1s ease;
        position: absolute;
        bottom: 0; left: 35vh; top: 10; right: 0
    }
    &__actions {
        margin-top: 15px;
    }

    &__actions > .menu {
        color: #fff;
        font-size:  2rem;
    }

    &__actions > .menu > span {
        color: #fff;
        font-size:  0.5em;
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
        .setting-bar__body {
            transform: translateX(0);
        }
    }
}
</style>
