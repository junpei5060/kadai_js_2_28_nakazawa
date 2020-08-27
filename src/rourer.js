import Vue from 'vue';
import Router from 'vue-router';
import VueCarousel from 'vue-carousel';
import Home from '../src/components/views/Home.vue';
import About from '../src/components/views/About.vue';
import Question1 from '../src/components/views/Question1.vue';
import Question2 from '../src/components/views/Question2.vue';
import Question3 from '../src/components/views/Question3.vue';
import Question4 from '../src/components/views/Question4.vue';
import Question5 from '../src/components/views/Question5.vue';
import Result from '../src/components/views/Result.vue';
import Orix from '../src/components/views/Orix.vue';
import Softbank from '../src/components/views/Softbank.vue';
import Seibu from '../src/components/views/Seibu.vue';
import Rakuten from '../src/components/views/Rakuten.vue';
import Nihonhamu from '../src/components/views/Nihonhamu.vue';
import Lotte from '../src/components/views/Lotte.vue';
import Service from '../src/components/views/Service.vue';

Vue.use(Router);
Vue.use(VueCarousel);
Vue.config.productionTip = false

export default new Router({
    mode:'history',
    routes:[{
        path:'/',component:Home
    },
    {
        path:'/about',component:About
    },
    {
        path:'/question1', component:Question1
    },
    {
        path:'/question2', component:Question2
    },
    {
        path:'/question3', component:Question3 
    },
    {
        path:'/question4', component:Question4 
    },
    {
        path:'/question5', component:Question5 
    },
    {
        path:'/result', component:Result
    },
    {
        path:'/orix', component:Orix
    },
    {
        path:'/softbank', component:Softbank
    },
    {
        path:'/seibu', component:Seibu
    },
    {
        path:'/rakuten', component:Rakuten
    },
    {
        path:'/nihonhamu', component:Nihonhamu
    },
    {
        path:'/lotte', component:Lotte
    },
    {
        path:'/service', component:Service
    }]
})