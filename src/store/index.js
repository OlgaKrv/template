import Vue from 'vue'
import Vuex from 'vuex'
import editEmpty from './modules/edit-empty'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		editEmpty,
	},
})
