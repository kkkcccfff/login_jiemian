import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Login from './login/login.js';
import Phonelg from './phonelg/phonelg.js';
import Forgetpw from './forgetpw/forgetpw.js';
import Home from './home/home.js';
import Fl from './finallogin/fl.js';
import AlterTip from './altertip/altertip.js'


const router = [
    {
        path : '/',
        redirect : '/fl'
    },
    Login,
    Phonelg,
    Forgetpw,
    Home,
    Fl,
    AlterTip
    
]
const vuerouter = new VueRouter({
    // mode : 'history',
    routes:router,
})
export default vuerouter;