import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Ajouté

// createApp(App).mount('#app') // Mis en commentaire

createApp(App).use(router).mount('#app');
