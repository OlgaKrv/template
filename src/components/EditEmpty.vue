<template>
	<div class="content_wrapper">
		<div class="content_title">
			<h2>Организация</h2>
			<button class="btn_close" @click="changeStatusIndex(0)">
				<img class="icon" src="../assets/img/Icon_close.svg" alt="icon" />
				Отменить
			</button>
		</div>
		<div class="parameter_indentation">
			<div class="text_item"><span class="designation">*</span>Тип</div>
			<div class="w_100">
				<select class="w_100" v-model="type">
					<option
						v-for="typeOption in allTypeOptions"
						:key="typeOption.id"
						:value="typeOption.title"
					>
						{{ typeOption.title }}
					</option>
				</select>
				<!-- <div>Выбрано: {{ organisationType }}</div> -->
			</div>
		</div>
		<div class="parameter_indentation">
			<div class="text_item">
				<span class="designation">*</span>Название организации
			</div>
			<div class="w_100">
				<input type="text" v-model="name" placeholder="Санаторий 'Огонёк'" />
			</div>
		</div>
		<div class="parameter_indentation">
			<div class="text_item">Описание</div>
			<div class="w_100">
				<textarea
					name=""
					v-model="description"
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
				<div class="text_center parameter_indentation">
					<button class="btn_add" @click="fileUpload">
						<img class="icon" src="../assets/img/plus_16.svg" alt="icon" />
						Загрузить
					</button>
				</div>
				<div class="text_center">
					<input
						v-model="allOrganisations[0].formData.displayFileName"
						class="input-field-file"
						readonly
					/>
					<input
						type="file"
						class="input-field-file"
						ref="fupload"
						@change="onFileChange"
					/>
					<div v-if="readyToUpload">
						<img
							:src="allOrganisations[0].formData.uploadFileData"
							class="preview_img"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="text_center">
			<button
				class="btn_save"
				@click="
					changeStatusIndex(2)
					changeOrganisation()
				"
			>
				Сохранить
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			organisationType: 'Пансионат',
			file: '',
			organisation: {
				id: 0,
				type: 0,
				name: "Санаторий 'Огонёк'",
				description: 'Мой первый бизнес',
				formData: {
					displayFileName: null,
					uploadFileData: null,
				},
			},
		}
	},
	computed: {
		type: {
			get() {
				return this.allOrganisations[0].type
			},
			set(value) {
				this.organisation.type = this.allTypeOptions
					.map((el) => el.title)
					.indexOf(value)
			},
		},
		name: {
			get() {
				return this.allOrganisations[0].name
			},
			set(value) {
				this.organisation.name = value
			},
		},
		description: {
			get() {
				return this.allOrganisations[0].description
			},
			set(value) {
				this.organisation.description = value
			},
		},
		readyToUpload() {
			return (
				this.allOrganisations[0].formData.displayFileName &&
				this.allOrganisations[0].formData.uploadFileData
			)
		},
		...mapGetters(['allTypeOptions', 'allOrganisations']),
	},
	methods: {
		...mapMutations([
			'updateCurrentStatusIndex',
			'changeOrganisationData',
			'changeUploadFileData',
			'changeDisplayFileName',
		]),
		onFileChange(event) {
			if (event.target.files && event.target.files.length) {
				const file = event.target.files[0]
				this.changeDisplayFileName(`${event.target.files[0].name}`)
				const reader = new FileReader()
				reader.onload = (e) => {
					this.changeUploadFileData(e.target.result)
				}
				reader.readAsDataURL(file)
			}
		},
		fileUpload() {
			this.$refs.fupload.click()
		},
		changeStatusIndex(index) {
			this.updateCurrentStatusIndex(index)
		},
		changeOrganisation() {
			this.changeOrganisationData(this.organisation)
		},
	},
}
</script>

<style>
.d_block {
	display: block;
}

.input-field-file {
	display: none;
}

.preview_img {
	width: 250px;
	padding: 15px;
	border: 1.5px solid #4444;
	border-radius: 8px;
}

select {
	height: 35px;
	line-height: 35px;
	padding: 0 7px;
}
</style>
