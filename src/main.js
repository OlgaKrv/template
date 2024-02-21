import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8080/'

Vue.use(VueAxios, axios)

new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app')
