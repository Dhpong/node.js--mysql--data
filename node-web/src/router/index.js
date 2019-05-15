import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'Vuex'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import home from '@/views/home'
import me from '@/views/me'

Vue.use(VueRouter);
Vue.use(Vuex);

// export default new Router({
const routes =  [
    {
      path: '/',
      name: 'login',
      component: login,
      meta:{title:" login11" }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{title:" home" }
    },
    {
      path: '/me',
      name: 'me',
      component: me,
      meta:{title:" me" }
    }
  ]

const store =new Vuex.Store({
	state:{
		count:0
	}
})






const router = new VueRouter({
    mode: 'history',   /*hash模式改为history*/
    routes,    // （缩写）相当于 routes: routes
    store
})


//beforeEach:导航钩子
router.beforeEach((to, from, next) => {

    window.document.title = to.meta.title;   // 修改网页标题
    next();

    //验证是否登陆，已登录则可访问，否则，返回登陆页
    // if(window.localStorage.getItem('token')){
    //     next();
    // }else{
    //     next('/login');
    // }


}); 

//返回顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);    //返回顶部
});




export default router;


