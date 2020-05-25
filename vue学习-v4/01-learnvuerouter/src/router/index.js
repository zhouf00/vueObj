// 配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const HomeNew = () => import('../components/HomeNew')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const Profile = () => import('../components/Profile')

// 通过vue.use（插件），安装插件
Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // },
  {
    path:'/home',
    // 懒加载的形式
    component: () => import('../components/Home'),
    meta:{
      title: '首页'
    },
    children: [
      {
        path: 'new',
        component: HomeNew,
        meta:{
          title: '新闻'
        }
      },
      {
        path: 'message',
        component: HomeMessage,
      },
    ]
  },
  {
    path:'/about',
    component: About,
    meta:{
      title: '关于'
    }
  },
  {
    // 动态路由写法
    path: '/user/:userid',
    component: () => import('../components/User'),
    meta:{
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title: '档案'
    }
  }
]
// 创建VueRouter对象
 const router = new Router({
  routes,
  mode: 'history',
  // 修改active的名称
  linkActiveClass: 'active',
})

// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // 导航守卫
  document.title = to.matched[0].meta.title
  next()
})
// 后置钩子(hook)
router.afterEach((to, from, next) => {
  console.log('----');
  
})
// 

export default router

