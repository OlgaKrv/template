<template>
	<article>
		<header class="content-title">
			<h2>Организация</h2>
			<button class="btn btn--close" @click="changeStatusIndex(0)">
				<svg
					class="btn--svg"
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.0463 0.335205C10.4932 -0.111735 11.2179 -0.111735 11.6648 0.335205C12.1117 0.782145 12.1117 1.50678 11.6648 1.95372L7.61851 6L11.6648 10.0463C12.1117 10.4932 12.1117 11.2179 11.6648 11.6648C11.2179 12.1117 10.4932 12.1117 10.0463 11.6648L6 7.61851L1.95372 11.6648C1.50678 12.1117 0.782145 12.1117 0.335205 11.6648C-0.111735 11.2179 -0.111735 10.4932 0.335205 10.0463L4.38149 6L0.335205 1.95372C-0.111735 1.50678 -0.111735 0.782145 0.335205 0.335205C0.782145 -0.111735 1.50678 -0.111735 1.95372 0.335205L6 4.38149L10.0463 0.335205Z"
						fill="#353535"
					/>
				</svg>
				Отменить
			</button>
		</header>
		<form class="organization-data-form">
			<label class="organization-data-form__label">
				<span class="designation">*</span>Тип
			</label>
			<select class="organization-data-form__select" v-model="type">
				<option
					v-for="typeOption in allTypeOptions"
					:key="typeOption.id"
					:value="typeOption.title"
				>
					{{ typeOption.title }}
				</option>
			</select>
		</form>
		<form class="organization-data-form">
			<label class="organization-data-form__label">
				<span class="designation">*</span>Название организации
			</label>
			<input
				class="organization-data-form__input"
				type="text"
				v-model="name"
				placeholder="Санаторий 'Огонёк'"
			/>
		</form>
		<form class="organization-data-form">
			<label class="organization-data-form__label">Описание</label>
			<textarea
				name=""
				class="organization-data-form__textarea"
				v-model="description"
				placeholder="Санаторий 'Огонёк'"
				id=""
				cols="30"
				rows="3"
			></textarea>
			<small class="organization-data-form__small">
				Описание в модуле на сайте не показывается
			</small>
		</form>
		<div class="organization-data-form">
			<label class="organization-data-form__label">
				<span class="designation">*</span>Логотип
			</label>
			<div class="organization-data-form__insertion_area">
				<p class="organization-data-form__description">
					Загрузите изображение или перетащите файл сюда
				</p>
				<small class="organization-data-form__small text-center">
					Максимальный размер изображения 10 Мб.&nbsp;
				</small>
				<small class="organization-data-form__small text-center">
					Допустимые форматы: .jpeg .png .webp .svg
				</small>
				<div class="organization-data-form__align_center">
					<button class="btn btn--add btn--before" @click="fileUpload">
						<svg
							class="btn--svg"
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.5 7H9.5V3C9.5 2.73478 9.39464 2.48043 9.20711 2.29289C9.01957 2.10536 8.76522 2 8.5 2C8.23478 2 7.98043 2.10536 7.79289 2.29289C7.60536 2.48043 7.5 2.73478 7.5 3V7H3.5C3.23478 7 2.98043 7.10536 2.79289 7.29289C2.60536 7.48043 2.5 7.73478 2.5 8C2.5 8.26522 2.60536 8.51957 2.79289 8.70711C2.98043 8.89464 3.23478 9 3.5 9H7.5V13C7.5 13.2652 7.60536 13.5196 7.79289 13.7071C7.98043 13.8946 8.23478 14 8.5 14C8.76522 14 9.01957 13.8946 9.20711 13.7071C9.39464 13.5196 9.5 13.2652 9.5 13V9H13.5C13.7652 9 14.0196 8.89464 14.2071 8.70711C14.3946 8.51957 14.5 8.26522 14.5 8C14.5 7.73478 14.3946 7.48043 14.2071 7.29289C14.0196 7.10536 13.7652 7 13.5 7Z"
								fill="#045CC4"
							/>
						</svg>
						Загрузить
					</button>
				</div>
				<div class="organization-data-form__align_center">
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
							class="preview-img"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="btn--center">
			<button
				class="btn btn--save btn--before"
				@click="
					changeStatusIndex(2)
					changeOrganisation()
				"
			>
				Сохранить
			</button>
		</div>
	</article>
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

.preview-img {
	width: 250px;
	padding: 15px;
	border: 1.5px solid #4444;
	border-radius: 8px;
	margin-top: 8px;
}

select {
	height: 35px;
	line-height: 35px;
	padding: 0 7px;
}
</style>
