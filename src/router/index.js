import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import ExecutiveBoard from '@/views/Teams.vue'
import Events from '@/views/Events.vue'
import PastEvents from '@/views/PastEvents.vue'
import Resources from '@/views/Resources.vue'
import ContactUs from '@/views/Contact.vue'
import JoinUs from '@/views/Join.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources,
    },
    {
      path: '/past-events',
      name: 'past-events',
      component: PastEvents,
    },
    {
      path: '/executive-board',
      name: 'executive-board',
      component: ExecutiveBoard,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs,
    },
    {
      path: '/join-us',
      name: 'join-us',
      component: JoinUs,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
  // Scroll to top on navigation; restore scroll on back/forward
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
