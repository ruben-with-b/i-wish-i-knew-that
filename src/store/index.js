import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentlyOpen: -1,
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
			},
			{
				id: 2,
				hidden: true,
				spotted: false
			},
			{
				id: 3,
				hidden: true,
				spotted: false
			},
			{
				id: 4,
				hidden: true,
				spotted: false
			},
			{
				id: 5,
				hidden: true,
				spotted: false
			},
			{
				id: 6,
				hidden: true,
				spotted: false
			},
			{
				id: 7,
				hidden: true,
				spotted: false
			},
			{
				id: 8,
				hidden: true,
				spotted: false
			},
			{
				id: 9,
				hidden: true,
				spotted: false
			},
			{
				id: 10,
				hidden: true,
				spotted: false
			},
			{
				id: 11,
				hidden: true,
				spotted: false
			},
			{
				id: 12,
				hidden: true,
				spotted: false
			}
		]
	},
	mutations: {
		openPopup (state, id) {
			if (state.currentlyOpen >= 0) {
				state.popups[state.currentlyOpen].hidden = true
				state.currentlyOpen = -1
			}

			if (state.currentlyOpen !== id) {
				state.currentlyOpen = id
				state.popups[id].hidden = false
				if (!state.popups[id].spotted) {
					state.popups[id].spotted = true
					state.itemsFound++
				}
			}
		},
		closePopup (state, id) {
			state.popups[state.currentlyOpen].hidden = true
			state.currentlyOpen = -1
		}
	},
	actions: {
		openPopup (context, id) {
			context.commit('openPopup', id)
		},
		closePopup (context, id) {
			context.commit('closePopup', id)
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
