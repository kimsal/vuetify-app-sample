import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/about-us'
import Contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ],
  mode: "history"
})
