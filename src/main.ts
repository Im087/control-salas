import { createApp } from 'vue';
import App from './App.vue';
import { store, key } from './store';
import 'bootstrap';
import './assets/style/main.scss';

const app = createApp(App);
app.use(store, key);
app.mount('#app');
