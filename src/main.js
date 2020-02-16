import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
import Detail from './components/Detail'
import NotFound from './components/NotFound'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
	
	routes: [
		{
			path: '/', 
			component: HelloWorld, Navbar
		},
		{
			path: '/movie',
			component: Movie
		},
		{
			path: '/details/:id',
			component: Detail
		},
		{
			path: '*',
			component: NotFound
		}
	],
	mode: 'history'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
