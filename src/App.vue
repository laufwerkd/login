<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'
let userStore = useUserStore();

import ControlPanel from '@/components/ControlPanel.vue';
import Login from '@/components/Login.vue';
</script>

<template>
    <Login class="login" v-if="userStore.loggedIn == false" />
    <ControlPanel v-if="userStore.loggedIn == true" class="controlPanel"/>
    <RouterView v-if="userStore.loggedIn == true" class="pageContent" />
</template>

<style>
#app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
}
</style>

<style scoped>
.login {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.controlPanel {
    min-width: 225px;
    height: fit-content;
    align-self: center;
    margin: 16px;
}

.pageContent {
    padding: 16px;
}
</style>
