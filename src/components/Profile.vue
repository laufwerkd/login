<script setup>
import { useUserStore } from '@/stores/user'
let userStore = useUserStore();
</script>

<template>
    <div class="profile">
        <div class="image"></div>
        <div class="info">
            <span class="fullname">{{ userStore.currentUser.name }}</span>
            <span>@{{ userStore.currentUser.username }}</span>
        </div>
    </div>
</template>

<style scoped>
.profile {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

.image {
    width: 40px;
    height: 40px;
    background-color: lightgray;
    border-radius: 32px;
}

.info {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
}

.fullname {
    font-weight: bold;
}
</style>