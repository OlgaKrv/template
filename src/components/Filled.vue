<template>
	<div>
		<div
			class="content_wrapper"
			v-for="organisation in allOrganisations"
			:key="organisation.id"
		>
			<div class="content_title">
				<h2>Организация</h2>
				<button class="btn_close">
					<img class="icon" src="../assets/img/Vector.svg" alt="icon" />
					Редактировать
				</button>
			</div>
			<div class="parameter_indentation">
				<div class="text_after pt_3">Тип</div>
				<div class="text_item_element">
					{{ typeOrganisation(organisation.type) }}
				</div>
			</div>
			<div class="parameter_indentation">
				<div class="text_after">Название организации</div>
				<div class="text_item_element">{{ organisation.name }}</div>
			</div>
			<div class="">
				<div class="text_after">Описание</div>
				<div class="text_item_element">{{ organisation.description }}</div>
			</div>
			<div class="logo_before">
				<div class="text_item">Логотип</div>
				<div class="logo_area">
					<img
						class="logo"
						src="../assets/img/imgContainer.png"
						alt="imgContainer"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters(['allOrganisations', 'typeOrganisation']),
	},
	methods: {
		typeOrganisation(num) {
			return this.typeOrganisation(num)
		},
	},
}
</script>
