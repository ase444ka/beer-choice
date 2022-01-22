import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const userAccess = (to, from, next) => {
  next()
}

class Page {
  constructor(
    path = null,
    component = null,
    name = null,
    beforeEnter = userAccess
  ) {
    this.path = path
    this.name = name
    this.component = () => import(`@/pages/${component}`)
    this.beforeEnter = beforeEnter
  }
}

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/beer-choice' },
    new Page('/beer-choice', 'BeerChoice', 'beerChoice'),
  ],

  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})
