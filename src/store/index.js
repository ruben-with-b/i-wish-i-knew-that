import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		itemsFound: 0,
		popups: [
			{
				id: 0,
				hidden: true,
				spotted: false
			},
			{
				id: 1,
				hidden: true,
				spotted: false
			}
		]
	},
	mutations: {
		togglePopup (state, id) {
			if (id >= 0) {
				state.popups[id].hidden = !state.popups[id].hidden
				if (!state.popups[id].spotted) {
					state.popups[id].spotted = true
					state.itemsFound++
				}
			}
		}
	},
	getters: {
		getPopupById: (state) => (id) => {
			return state.popups.find(popup => popup.id === id)
		},
		numberOfItems: state => state.popups.length,
		numberOfItemsFound: state => state.itemsFound
	},
	modules: {
	}
})
