import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Keycloak from "keycloak-js";
import type { VueKeycloakInstance } from "@dsb-norge/vue-keycloak-js/dist/types";
import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueKeycloakJs, {
    init: {
        // Use 'login-required' to always require authentication
        // If using 'login-required', there is no need for the router guards in router.js
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html"
    },
    config: {
        url: 'https://192.168.2.119/auth',
        clientId: 'webfront-vue',
        realm: 'wordmaster'
    },
    onReady(keycloak: Keycloak) {
        console.log('Keycloak ready', keycloak)
    }
})

app.use(createPinia())
app.use(router)

app.mount('#app')

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties  {
    $keycloak: VueKeycloakInstance
  }
}