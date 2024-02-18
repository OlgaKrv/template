<template>
	<div class="content_wrapper">
		<div class="content_title">
			<h2>Организация</h2>
		</div>
		<div class="text_description parameter_indentation">
			Назване организации, логотип и описание
		</div>
		<div class="text_center">
			<button class="btn_add" @click="changeStatusIndex(1)">
				<img class="icon" src="../assets/img/plus_16.svg" alt="icon" />
				Добавить
			</button>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	methods: {
		...mapMutations(['updateCurrentStatusIndex']),
		changeStatusIndex(index) {
			this.updateCurrentStatusIndex(index)
		},
	},
}
</script>
