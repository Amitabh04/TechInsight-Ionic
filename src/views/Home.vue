<template>
    <div class="view">
        <div class="header">
            <button type="button" class="btn btn-primary h-100" @click="openSheet">Menu</button>
        </div>
        <div class="content">
            <div class="long-content bg-secondary"></div>
            <div class="long-content bg-warning"></div>
        </div>
        <div class="footer">
            <h1>Footer</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
   
});
</script>

<style lang="scss">
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
