import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/demo1_intro.vue'
//import Demo2 from '../views/demo2_EventMethod.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo1' ,
    name: 'demo1' ,
    component : Demo1
  }
  /*{
    path: '/demo2' ,
    name: 'demo2' ,
    component : Demo2
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
