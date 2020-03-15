import Vue from 'vue'
import Router from 'vue-router'
import map from '@/components/map.vue'
import heat from '@/components/heat.vue'
import grid from '@/components/grid.vue'
import analyse from '@/components/arc.vue'
Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: map
    },{
      path: '/heat',
      name: 'heat',
      component: heat
    },{
      path: '/grid',
      name: 'grid',
      component: grid
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },{
      path: '/analyse',
      name: 'analyse',
      component: analyse
    },
  ]
})
