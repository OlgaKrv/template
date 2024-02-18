<template>
	<div class="content_wrapper">
		<div class="content_title">
			<h2>Организация</h2>
			<button class="btn_close">
				<img class="icon" src="../assets/img/Icon_close.svg" alt="icon" />
				Отменить
			</button>
		</div>
		<div class="parameter_indentation">
			<div class="text_item"><span class="designation">*</span>Тип</div>
			<div class="w_100">
				<select class="w_100">
					<option
						v-for="typeOption in allTypeOptions"
						:key="typeOption.id"
						value="typeOption.id"
					>
						{{ typeOption.title }}
					</option>
				</select>
			</div>
		</div>
		<div class="parameter_indentation">
			<div class="text_item">
				<span class="designation">*</span>Название организации
			</div>
			<div class="w_100">
				<input type="text" placeholder="Санаторий 'Огонёк'" />
			</div>
		</div>
		<div class="parameter_indentation">
			<div class="text_item">Описание</div>
			<div class="w_100">
				<textarea
					name=""
					placeholder="Санаторий 'Огонёк'"
					id=""
					cols="30"
					rows="3"
				></textarea>
			</div>
			<div class="text_after">Описание в модуле на сайте не показывается</div>
		</div>
		<div class="parameter_indentation">
			<div class="text_item"><span class="designation">*</span>Логотип</div>
			<div class="insertion_area">
				<div class="text_description">
					Загрузите изображение или перетащите файл сюда
				</div>
				<div class="text_after text_center pt_5">
					Максимальный размер изображения 10 Мб.&nbsp;
				</div>
				<div class="text_after text_center parameter_indentation pt_5">
					Допустимые форматы: .jpeg .png .webp .svg
				</div>
				<div class="text_center">
					<button class="btn_add">
						<img class="icon" src="../assets/img/plus_16.svg" alt="icon" />
						Загрузить
					</button>
				</div>
			</div>
		</div>
		<div class="text_center">
			<button class="btn_save">Сохранить</button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	// computed: {
	// 	allTypeOptions() {
	// 		return this.$store.getters.allTypeOptions
	// 	},
	// },
	computed: mapGetters(['allTypeOptions']),
}
</script>

<style>
select {
	height: 35px;
	line-height: 35px;
	padding: 0 7px;
}
</style>
