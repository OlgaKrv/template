<template>
	<article>
		<div v-for="organisation in allOrganisations" :key="organisation.id">
			<header class="content-title">
				<h2>Организация</h2>
				<button class="btn btn--close" @click="changeStatusIndex(1)">
					<svg
						class="btn--svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.38626 9.5322C3.19852 9.72124 2.94311 9.82756 2.67669 9.82756H1C0.723858 9.82756 0.5 9.6037 0.5 9.32756V7.62927C0.5 7.36526 0.604403 7.11197 0.790434 6.92463L7.48806 0.180176C7.60266 0.0648094 7.75807 0 7.92011 0C8.08216 0 8.23757 0.0648094 8.35217 0.180176L10.081 1.92048C10.1956 2.03589 10.2599 2.19238 10.2599 2.35556C10.2599 2.51874 10.1956 2.67524 10.081 2.79064L3.38626 9.5322ZM0.5 11.3846C0.5 11.0447 0.775517 10.7692 1.11539 10.7692H10.8846C11.2245 10.7692 11.5 11.0447 11.5 11.3846C11.5 11.7245 11.2245 12 10.8846 12H1.11538C0.775517 12 0.5 11.7245 0.5 11.3846Z"
							fill="#353535"
						/>
					</svg>
					Редактировать
				</button>
			</header>
			<dl class="organization-data-form">
				<dt class="organization-data-form__small pt_3">Тип</dt>
				<dd class="text_item_element">
					{{ typeOrganisation(organisation.type) }}
				</dd>
				<dt class="organization-data-form__small">Название организации</dt>
				<dd class="text_item_element">
					{{ organisation.name }}
				</dd>
				<dt class="organization-data-form__small">Описание</dt>
				<dd class="text_item_element">
					{{ organisation.description }}
				</dd>
			</dl>
			<div class="logo">
				<div class="logo__text_after">Логотип</div>
				<div class="logo__area">
					<img
						class="logo__img"
						:src="allOrganisations[0].formData.uploadFileData"
						alt="Здесь должен быть размещен логотип компании"
					/>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	computed: {
		...mapGetters(['allOrganisations', 'typeOrganisation']),
	},
	methods: {
		...mapMutations(['updateCurrentStatusIndex']),
		changeStatusIndex(index) {
			this.updateCurrentStatusIndex(index)
		},
		typeOrganisation(num) {
			return this.typeOrganisation(num)
		},
	},
}
</script>
