import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

const email = document.querySelector(".form-email")
const emailError = document.querySelector('.email-error')
    email.addEventListener('keydown', (event) => {
        const value = email.value
        if (value.length < 5) {
            emailError.innerHTML = 'Символов должно быть не меньше 5'
        } else {
            emailError.innerHTML = ''
        }
        })