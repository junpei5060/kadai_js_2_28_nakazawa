import Vue from 'vue';
import App from './App.vue';
import router from './rourer.js';
import store from  './store.js';
import VueTypedJs from 'vue-typed-js';
import Inview from 'vueinview';


Vue.config.productionTip = false
Vue.use(VueTypedJs)
Vue.use(Inview);

new Vue({
  router,
  store,
  Inview,
  render: h => h(App)
}).$mount('#app')

