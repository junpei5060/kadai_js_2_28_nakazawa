import Vue from 'vue';
import App from './App.vue';
import router from './router/rourer.js';
import store from  './store/store.js';
import Inview from 'vueinview';
import moment from 'vue-moment'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import 'firebase/auth'


Vue.config.productionTip = false

Vue.use(Inview);
Vue.use(moment)
Vue.use(BootstrapVue)

const firebaseConfig = {
  apiKey: "AIzaSyBEeYBWh1YLhmyWs7o3UriKowuGDBrN5WU",
  authDomain: "project-memo-17a70.firebaseapp.com",
  databaseURL: "https://project-memo-17a70.firebaseio.com",
  projectId: "project-memo-17a70",
  storageBucket: "project-memo-17a70.appspot.com",
  messagingSenderId: "774245133492",
  appId: "1:774245133492:web:8bc71c5e0f5825f95a7be1"
};

firebase.initializeApp(firebaseConfig);

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

