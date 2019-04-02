import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import index from '@/components/index.vue'
import Individual from '@/pages/Individual.vue'
import register from '@/pages/register.vue'
import Login from '@/pages/Login.vue'
import Quicklogin from '@/pages/Quicklogin.vue'
import Retrieve from '@/pages/Retrieve.vue'
import secondary from '@/pages/secondary.vue'
import Location from '@/pages/Location.vue'
import hideIndividual from '@/pages/hideIndividual.vue'
import follow from '@/pages/follow.vue'
import details from '@/pages/details.vue'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {//主页
      path: '/',
      component: index
    },
    {//个人中心
      path: '/Individual',
      component: Individual
    },
    {//详情
      path: '/details',
      component: details
    },
    {//关注
      path: '/follow',
      meta: {
   			requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
  		},
      component: follow
    },
    {//隐藏个人中心
      path: '/hideIndividual',
      meta: {
   			requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
  		},
      component: hideIndividual
    },
    {//注册
      path: '/register',
      component: register
    },
    {//登录
      path: '/Login',
      component: Login
    },
    {//手机快捷登录
      path: '/Quicklogin',
      component: Quicklogin
    },
    {//找回
      path: '/Retrieve',
      component: Retrieve
    },
    {//二手房页
      path: '/secondary',
      component: secondary
    },
    {//定位
      path: '/Location',
      component: Location
    }
  ]
})
