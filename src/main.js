// import './assets/main.css'
// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


import './scss/styles.scss'
// import Pinia
import {createPinia} from 'pinia'

// import router
import router from './router'

// import axios
import './axios'

import { createApp ,markRaw} from 'vue'
import App from './App.vue'

const pinia=createPinia();

// Redirect route from store action
pinia.use(({store})=>{
    store.router=markRaw(router)
})

const app=createApp(App);

app.use(pinia);
app.use(router);


app.mount('#app');
