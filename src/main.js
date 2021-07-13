// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2Fillters from "vue2-filters" ;

Vue.use(Vue2Fillters);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');


// createApp(App).use(store).use(router).mount('#app')
