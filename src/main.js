

import { createApp } from 'vue'; // Import createApp from 'vue' for Vue 3
import App from './App.vue';
import router from './routes/index';


const app = createApp(App);

app.use(router);

app.mount('#app');
