import {createRouter,createWebHistory} from 'vue-router'

import Home from './../components/Home.vue'
import Login from './../components/Login.vue'
import Register from './../components/Register.vue'
import NewTask from './../components/NewTask.vue'


const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/register',
        name:'register',
        component:Register
    },
    {
        path:'/new-task',
        name:'new-task',
        component:NewTask
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;