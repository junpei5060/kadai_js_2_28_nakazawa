import Vue from 'vue';
import App from './App.vue';
import router from './router/rourer.js';
import store from  './store/store.js';
import Inview from 'vueinview';
import moment from 'vue-moment'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(Inview);
Vue.use(moment)
Vue.use(BootstrapVue)

Vue.mixin({
  methods: {
  },
  computed: {
    routeInfo: {
      get () {
        return `${this.$route.name} : ${this.$route.path}`
      }
    }
  }
})

new Vue({
  router,
  store,
  Inview,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')

