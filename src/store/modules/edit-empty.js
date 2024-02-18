export default {
	actions: {},
	mutations: {
		updateCurrentStatusIndex(state, num) {
			state.current_status_index = num
		},
		changeOrganisationData(state, organisation) {
			state.organisations[0].type = organisation.type
			state.organisations[0].name = organisation.name
			state.organisations[0].description = organisation.description
		},
	},
	state: {
		current_status_index: 0,
		type_options: [
			{ id: 0, title: 'Санаторий' },
			{ id: 1, title: 'Пансионат' },
			{ id: 2, title: 'Курортная поликлиника' },
		],
		organisations: [
			{
				id: 0,
				type: 0,
				name: "Санаторий 'Огонёк'",
				description: 'Мой первый бизнес',
				logo: '../assets/img/imgContainer.png',
			},
		],
	},
	getters: {
		currentStatusIndex(state) {
			return state.current_status_index
		},
		allTypeOptions(state) {
			return state.type_options
		},
		allOrganisations(state) {
			return state.organisations
		},
		typeOrganisation: (state) => (num) => {
			return state.type_options[num].title
		},
	},
}
