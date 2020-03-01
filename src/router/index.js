import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Content from '@/components/Content'
import Artists from '@/components/Artist'
import Play from '@/components/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/content/:data',
      name:  'Content',
      component: Content,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/content/artists/:data',
      name:  'Artists',
      component: Artists,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/content/artists/:data/play/:data',
      name:  'Play',
      component: Play,
      props: true,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
