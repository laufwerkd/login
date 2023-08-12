<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'
let userStore = useUserStore();

import Profile from '@/components/Profile.vue';
</script>

<template>
    <div class="controlPanel">
        <header>
            <Profile />
        </header>
        <hr>
        <nav>
            <RouterLink to="/"><i class="bi bi-house"></i>Home</RouterLink>
            <RouterLink to="/notes"><i class="bi bi-stickies"></i>Notizen</RouterLink>
            <RouterLink to="/profile"><i class="bi bi-person"></i>Profil</RouterLink>
        </nav>
        <hr>
        <footer>
            <a href="#" @click="userStore.logout()"><i class="bi bi-box-arrow-left"></i>Logout</a>
        </footer>
    </div>
</template>

<style scoped>
.controlPanel {
    padding: 12px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 0px 0px 8px lightgray;
    overflow: hidden;
}

nav, footer {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

a {
    padding: 12px;
    text-decoration: none;
    border-radius: 8px;
}

a.router-link-active, a:hover, a.router-link-active > i.bi, a:hover > i.bi {
    background-color: var(--main);
    color: var(--light);
}

a > i.bi {
    margin-right: 12px;
}
</style>