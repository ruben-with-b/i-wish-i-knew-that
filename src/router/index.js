import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'manual',
		component: () => import('../views/Manual.vue')
	},
	{
		path: '/infographic',
		name: 'infographic',
		component: () => import('../views/Infographic.vue')
	},
	{
		path: '/solution',
		name: 'solution',
		component: () => import('../views/Solution.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/About.vue')
	},
	{
		path: '/wave',
		name: 'wave',
		component: () => import('../components/Wave.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
