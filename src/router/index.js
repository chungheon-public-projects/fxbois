import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Borrow from '../views/Borrow.vue'
import Lend from '../views/Lend.vue'
import BorrowHistory from '../views/BorrowHistory.vue'
import LendPortfolio from '../views/LendPortfolio.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/borrow',
    name: 'Borrow',
    component: Borrow
  },
  {
    path: '/borrowhistory',
    name: 'BorrowHistory',
    component: BorrowHistory
  },
  {
    path: '/lend',
    name: 'Lend',
    component: Lend
  },
  {
    path: '/lendportfolio',
    name: 'LendPortfolio',
    component: LendPortfolio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
