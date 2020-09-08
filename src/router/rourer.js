import Vue from 'vue';
import Router from 'vue-router';
import VueCarousel from 'vue-carousel';
import MemoList from '../pages/MemoList.vue'
import About from '../components/views/About.vue';
import MemoDetails from '../pages/MemoDetail.vue'
import Service from '../components/views/Service.vue';

Vue.use(Router);
Vue.use(VueCarousel);
Vue.config.productionTip = false

export default new Router({
    mode:'history',
    routes:[{
        path: '/',
        name: 'MemoList',
        component: MemoList,
        meta: {
            title: 'memo list'
        }
    },
    {
        path: '/memo/:id',
        name: 'MemoDetails',
        component: MemoDetails,
        props: true,
        meta: {
        title: 'details of memo'
    },
    },
    {
        path:'/about',component:About
    },
    {
        path:'/service', component:Service
    },
]
})