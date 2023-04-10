import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainview from '../views/MainView.vue'
import IndexView from '../views/IndexView.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/index"
  },
  {
    path: "/index",
    component: IndexView,
    children: [{
      path: "/",
      redirect: "home"
    }, {
      path: "home",
      name: "indexHome",
      component: () => import("@/views/IndexHome.vue")
    }, {
      path: "login",
      name: "indexLogin",
      component: () => import("@/views/IndexLogin.vue")
    }, {
      path: "register",
      name: "indexRegister",
      component: () => import("@/views/IndexRegister.vue")
    },]
  },
  {
    path: '/main',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mainview
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

// 路由前置守卫
router.beforeEach((to, _, next) => {
  const isLogin = !!store.state.login.username
  if (isLogin) {
    if (to.path === "/index") next("/main")
    else next()
  } else {
    if (to.path === "/main") next("/index")
    else next()
  }
})

export default router