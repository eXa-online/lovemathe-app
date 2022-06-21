import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '@/components/Introduction.vue'
import AddQuantities from '@/components/AddQuantities.vue'
import Counting from '@/components/Counting.vue'
import OneLook from '@/components/OneLook.vue'
import OverallBadge from '@/components/OverallBadge.vue'
import QuantityComparison from '@/components/QuantityComparison.vue'
import QuantityEquality from '@/components/QuantityEquality.vue'
import ReduceQuantities from '@/components/ReduceQuantities.vue'
import Seriation from '@/components/Seriation.vue'
import Orientation from '@/components/Orientation.vue'

import TutoringOverallBadge from '@/components/tutoring/TutoringOverallBadge.vue'
import TutoringStart from '@/components/tutoring/TutoringStart.vue'

import SimultanerfassungOne from '@/components/tutoring/SimultanerfassungOne';
import SimultanerfassungTwo from '@/components/tutoring/SimultanerfassungTwo';
import SimultanerfassungThree from '@/components/tutoring/SimultanerfassungThree';
import SimultanerfassungFour from '@/components/tutoring/SimultanerfassungFour';
import SimultanerfassungFive from '@/components/tutoring/SimultanerfassungFive';
import SimultanerfassungSix from '@/components/tutoring/SimultanerfassungSix';

import AbzaehlenOne from '@/components/tutoring/AbzaehlenOne';
import AbzaehlenTwo from '@/components/tutoring/AbzaehlenTwo';
import AbzaehlenThree from '@/components/tutoring/AbzaehlenThree';
import AbzaehlenFour from '@/components/tutoring/AbzaehlenFour';
import AbzaehlenFive from '@/components/tutoring/AbzaehlenFive';
import AbzaehlenSix from '@/components/tutoring/AbzaehlenSix';

import OrientierungOne from '@/components/tutoring/OrientierungOne';
import OrientierungTwo from '@/components/tutoring/OrientierungTwo';
import OrientierungThree from '@/components/tutoring/OrientierungThree';
import OrientierungFour from '@/components/tutoring/OrientierungFour';
import OrientierungFive from '@/components/tutoring/OrientierungFive';

import MengenOne from '@/components/tutoring/MengenOne';
import MengenTwo from '@/components/tutoring/MengenTwo';
import MengenThree from '@/components/tutoring/MengenThree';
import MengenFour from '@/components/tutoring/MengenFour';

const routes = [
  { path: '/', component: Introduction},

  { path: '/overall-badge', component: OverallBadge },
  { path: '/add_quantities', component: AddQuantities },
  { path: '/counting', component: Counting },
  { path: '/one_look', component: OneLook },
  { path: '/quantity_comparison', component: QuantityComparison },
  { path: '/quantity_equality', component: QuantityEquality },
  { path: '/reduce_quantities', component: ReduceQuantities },
  { path: '/seriation', component: Seriation },
  { path: '/orientation', component: Orientation },

  { path: '/tutoring/vorschule', component: TutoringOverallBadge },
  { path: '/tutoring/', component: TutoringStart },

  { path: '/tutoring/vorschule/simultanerfassung_one', component: SimultanerfassungOne },
  { path: '/tutoring/vorschule/simultanerfassung_two', component: SimultanerfassungTwo },
  { path: '/tutoring/vorschule/simultanerfassung_three', component: SimultanerfassungThree },
  { path: '/tutoring/vorschule/simultanerfassung_four', component: SimultanerfassungFour },
  { path: '/tutoring/vorschule/simultanerfassung_five', component: SimultanerfassungFive },
  { path: '/tutoring/vorschule/simultanerfassung_six', component: SimultanerfassungSix },

  { path: '/tutoring/vorschule/abzaehlen_one', component: AbzaehlenOne },
  { path: '/tutoring/vorschule/abzaehlen_two', component: AbzaehlenTwo },
  { path: '/tutoring/vorschule/abzaehlen_three', component: AbzaehlenThree },
  { path: '/tutoring/vorschule/abzaehlen_four', component: AbzaehlenFour },
  { path: '/tutoring/vorschule/abzaehlen_five', component: AbzaehlenFive },
  { path: '/tutoring/vorschule/abzaehlen_six', component: AbzaehlenSix },

  { path: '/tutoring/vorschule/orientierung_one', component: OrientierungOne },
  { path: '/tutoring/vorschule/orientierung_two', component: OrientierungTwo },
  { path: '/tutoring/vorschule/orientierung_three', component: OrientierungThree },
  { path: '/tutoring/vorschule/orientierung_four', component: OrientierungFour },
  { path: '/tutoring/vorschule/orientierung_five', component: OrientierungFive },

  { path: '/tutoring/vorschule/mengen_one', component: MengenOne },
  { path: '/tutoring/vorschule/mengen_two', component: MengenTwo },
  { path: '/tutoring/vorschule/mengen_three', component: MengenThree },
  { path: '/tutoring/vorschule/mengen_four', component: MengenFour },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
