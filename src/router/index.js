import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionView from "@/views/QuizAnswer.vue";
import QuizAnswer from "@/views/QuizAnswer.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/question',
      name: 'question',
      component: QuestionView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/quiz/:id/answer',
      name: 'QuizAnswer',
      component: QuizAnswer, // Komponente für das Quiz-Beantwortungsformular
      props: true
    }
  ]
})

export default router
