require('./bootstrap');

import { createApp } from 'vue';

import router from './router'



const app = createApp({})

//Aca hacemos que vue utilize vue-router
app.use(router);

app.mount('#app');