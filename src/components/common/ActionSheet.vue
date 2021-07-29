<template>
    <div class="action-sheet" :class="{'show':show}">
        <div class="action-sheet__overlay">
            <div class="action-sheet__actions">
                <div class="action-sheet__action" v-for="action in actions" :key="action" @click.prevent="executeAction(action)">
                    {{ action.label }}
                </div>
                <div class="action-sheet__action action-sheet__cancel" @click.prevent="hideSheet">
                    Cancel
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SheetActionObj } from '@/services/ui/actionsheet.service'

export default defineComponent({
    name: "ActionSheet",
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
        executeAction(action: SheetActionObj) {
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

.action-sheet {

    &__overlay {
        z-index: $zindex-sheets;
        position: fixed;
        top: 0; right: 0; bottom: 0; left: 0;
        background-color: rgba($dark, 0.5);
    }

    &__actions {
        height: 50vh;
        background-color: $body-bg;
        transform: translateY(110%);
        transition: all 1s ease;
        position: absolute;
        bottom: 0; left: 0; right: 0;
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
        .action-sheet__actions {
            transform: translateY(0);
        }
    }
}
</style>
