import {createRouter , createWebHashHistory} from "vue-router";

//制定路由规则
const routes = [

    {
       path:'/',
       name:'main',
       component:()=>import('@/views/Main.vue')
    }
];

//设置路由模式
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;