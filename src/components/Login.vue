<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user'
let userStore = useUserStore();

let username = ref("");
let password = ref("");

function validateLogin() {
    for (let user in userStore.users) {
        if (userStore.users[user].username == username.value && userStore.users[user].password == password.value) {
            userStore.login(userStore.users[user]);
        }
    }
}
</script>

<template>
    <div class="login">
        <div class="innerLogin">
            <h1>Willkommen</h1>
            <form @submit.prevent="validateLogin">
                <input class="inputField" v-model="username" type="text" placeholder="Nutzername">
                <input class="inputField" v-model="password" type="password" placeholder="Passwort">
                <input class="inputLogin" type="submit" value="Login">
            </form>
        </div>
    </div>
</template>

<style scoped>
.login {
    height: 100vh;
    width: 100vw;
}

.innerLogin {
    width: 400px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--light);
    border-radius: 16px;
    box-shadow: 0px 0px 8px lightgray;
}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.inputField {
    width: 100%;
    height: 32px;
    padding: 0 4px;
    background-color: unset;
    border: 0;
    border-bottom: 1px solid lightgray;
    outline: none;
}

.inputLogin {
    height: 32px;
    background-color: #4CA64C;
    color: var(--light);
    border: 0;
    border-radius: 32px;
    cursor: pointer;
}
</style>