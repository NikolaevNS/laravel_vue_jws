import './bootstrap';
import { createApp } from 'vue';
import Index from './components/Index.vue';
import router from '../js/router';

const app = createApp({});

app.component('index', Index);

app.use(router);
app.mount('#app');
