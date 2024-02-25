export default {
	actions: {},
	mutations: {
		updateCurrentStatusIndex(state, num) {
			state.currentStatusIndex = num
		},
		changeOrganisationData(state, organisation) {
			state.organisations[0].type = organisation.type
			state.organisations[0].name = organisation.name
			state.organisations[0].description = organisation.description
		},
		changeUploadFileData(state, uploadFileData) {
			state.organisations[0].formData.uploadFileData = uploadFileData
		},
		changeDisplayFileName(state, displayFileName) {
			state.organisations[0].formData.displayFileName = displayFileName
		},
	},
	state: {
		currentStatusIndex: 0,
		typeOptions: [
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
				formData: {
					displayFileName: null,
					uploadFileData: '../assets/img/imgContainer.png',
				},
			},
		],
	},
	getters: {
		currentStatusIndex(state) {
			return state.currentStatusIndex
		},
		allTypeOptions(state) {
			return state.typeOptions
		},
		allOrganisations(state) {
			return state.organisations
		},
		typeOrganisation: (state) => (num) => {
			return state.typeOptions[num].title
		},
	},
}
