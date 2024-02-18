export default {
	actions: {},
	mutations: {},
	state: {
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
