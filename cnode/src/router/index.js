import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home.vue'
import Topic from '@/views/topic/topic.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/topic/:id?',
      name:'Topic',
      component:Topic,
      props: true
    }
  ]
})
