import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/global.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'

import HomePage    from './views/HomePage.vue'
import ServicePage from './views/ServicePage.vue'
import WorksPage   from './views/WorksPage.vue'
import ProcessPage from './views/ProcessPage.vue'
import AboutPage   from './views/AboutPage.vue'
import CareersPage from './views/CareersPage.vue'
import ContactPage from './views/ContactPage.vue'

const routes = [
  { path: '/',         component: HomePage    },
  { path: '/services', component: ServicePage },
  { path: '/works',    component: WorksPage   },
  { path: '/process',  component: ProcessPage },
  { path: '/about',    component: AboutPage   },
  { path: '/careers',  component: CareersPage },
  { path: '/contact',  component: ContactPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
})

router.afterEach(() => {
  setTimeout(() => AOS.refresh(), 100)
})

createApp(App).use(router).mount('#app')
