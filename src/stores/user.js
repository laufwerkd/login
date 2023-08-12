import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    let users = ref({
        "root": {
            id: "0",
            name: "Admin",
            username: "root",
            password: "toor"
        },
        "laufwerkd": {
            id: "1",
            name: "Daniel",
            username: "laufwerkd",
            password: "passwort"
        },
        "test": {
            id: "2",
            name: "Test User",
            username: "test",
            password: "1234"
        }
    })

    let currentUser = ref(null);
    let loggedIn = ref(false);

    function login(user) {
        currentUser.value = user;
        loggedIn.value = true;
    }

    function logout() {
        loggedIn.value = false;
    }

    return {
        users,
        currentUser,
        loggedIn,

        login,
        logout
    }
})
