// 配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const HomeNew = () => import('../components/HomeNew')

const About = () => import('../components/About')

// 通过vue.use（插件），安装插件
Vue.use(Router)

// 创建VueRouter对象
export default new Router({
  routes: [
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
      children: [
        {
          path: 'new',
          component: HomeNew
        },
        {
          path: '',
          redirect: 'new'
        }
      ]
    },
    {
      path:'/about',
      component: About
    },
    {
      // 动态路由写法
      path: '/user/:userid',
      component: () => import('../components/User')
    }

  ],
  mode: 'history',
  // 修改active的名称
  linkActiveClass: 'active'
})
