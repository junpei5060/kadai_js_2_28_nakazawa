import Vue from 'vue';
import Router from 'vue-router';
import VueCarousel from 'vue-carousel';
import MemoList from '../pages/MemoList.vue'
import Form from '../components/views/MemoListForm.vue';
import Thanks from '../components/views/Thanks.vue';


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
        path:'/form',component:Form
    },
    {
        path:'/thanks', component:Thanks
    },
]
})