import { createRouter, createWebHistory } from 'vue-router'
import AddQuantities from '@/components/AddQuantities.vue'
import Counting from '@/components/Counting.vue'
import OneLook from '@/components/OneLook.vue'
import OverallBadge from '@/components/OverallBadge.vue'
import QuantityComparison from '@/components/QuantityComparison.vue'
import QuantityEquality from '@/components/QuantityEquality.vue'
import ReduceQuantities from '@/components/ReduceQuantities.vue'
import Seriation from '@/components/Seriation.vue'

const routes = [
  { path: '/', component: OverallBadge },
  { path: '/add_quantities', component: AddQuantities },
  { path: '/counting', component: Counting },
  { path: '/one_look', component: OneLook },
  { path: '/quantity_comparison', component: QuantityComparison },
  { path: '/quantity_equality', component: QuantityEquality },
  { path: '/reduce_quantities', component: ReduceQuantities },
  { path: '/seriation', component: Seriation },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
