import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'index',
      component: () => import('@/views/index.vue')
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path:'/register',
      name: 'register',
      component: () => import('@/views/register.vue')
    },
    {
      path:'/change-password',
      name: 'changePassword',
      component: () => import('@/views/change-password.vue')
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path:'/bookshop',
      name: 'bookshop',
      component: () => import('@/views/bookShop/book-shop.vue')
    },
    {
      path:'/rank',
      name: 'rank',
      component: () => import('@/views/rank.vue')
    },
    {
      path:'/user',
      name: 'user',
      component: () => import('@/views/user.vue')
    },
    {
      path:'/message',
      name: 'message',
      component: () => import('@/views/message/message.vue')
    },
    {
      path:'/message-detail',
      name: 'messageDetail',
      component: () => import('@/views/message/message-detail.vue')
    },
    {
      path:'/mybook',
      name: 'myBook',
      component: () => import('@/views/mybook/mybook.vue')
    },
    {
      path:'/addbook',
      name: 'addBook',
      component: () => import('@/views/mybook/addbook.vue')
    },
    {
      path:'/mycache',
      name: 'mycache',
      component: () => import('@/views/mycache.vue')
    },
    {
      path:'/browse',
      name: 'browse',
      component: () => import('@/views/browse.vue')
    },
    {
      path:'/search',
      name: 'search',
      component: () => import('@/views/search.vue')
    },
    {
      path:'/book-detail',
      name: 'bookDetail',
      component: () => import('@/views/book-detail.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
