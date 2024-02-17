<template>
	<div id="app">
		<div class="content_wrapper">
			<div class="content_title">
				<h2>Организация</h2>
			</div>
			<div class="text_description parameter_indentation">
				Назване организации, логотип и описание
			</div>
			<div class="text_center">
				<button class="btn_add">
					<img class="icon" src="./assets/img/plus_16.svg" alt="icon" />
					Добавить
				</button>
			</div>
		</div>
		<div class="content_wrapper">
			<div class="content_title">
				<h2>Организация</h2>
				<button class="btn_close">
					<img class="icon" src="./assets/img/Icon_close.svg" alt="icon" />
					Отменить
				</button>
			</div>
			<div class="parameter_indentation">
				<div class="text_item"><span class="designation">*</span>Тип</div>
				<div class="w_100">
					<input type="text" placeholder="Санаторий" />
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
							<img class="icon" src="./assets/img/plus_16.svg" alt="icon" />
							Загрузить
						</button>
					</div>
				</div>
			</div>
			<div class="text_center">
				<button class="btn_save">Сохранить</button>
			</div>
		</div>
		<div class="content_wrapper">
			<div class="content_title">
				<h2>Организация</h2>
				<button class="btn_close">
					<img class="icon" src="./assets/img/Vector.svg" alt="icon" />
					Редактировать
				</button>
			</div>
			<div class="parameter_indentation">
				<div class="text_after pt_3">Тип</div>
				<div class="text_item_element">Санаторий</div>
			</div>
			<div class="parameter_indentation">
				<div class="text_after">Название организации</div>
				<div class="text_item_element">Санаторий 'Огонёк'</div>
			</div>
			<div class="">
				<div class="text_after">Описание</div>
				<div class="text_item_element">Мой первый бизнес</div>
			</div>
			<div class="logo_before">
				<div class="text_item">Логотип</div>
				<div class="logo_area">
					<img
						class="logo"
						src="./assets/img/imgContainer.png"
						alt="imgContainer"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
}
</script>

<style>
@font-face {
	font-family: 'Roboto-Medium';
	font-style: normal;
	font-display: auto;
	unicode-range: U+000-5FF;
	src: local('Roboto-Medium'), url('assets/fonts/Roboto/Roboto-Medium.ttf');
}
@font-face {
	font-family: 'Roboto-Regular';
	font-style: normal;
	font-display: auto;
	unicode-range: U+000-5FF;
	src: local('Roboto-Regular'), url('assets/fonts/Roboto/Roboto-Regular.ttf');
}
@font-face {
	font-family: 'Inter';
	font-style: normal;
	font-display: auto;
	unicode-range: U+000-5FF;
	src: local('Inter-Medium'), url('assets/fonts/Inter/Inter-Medium.ttf');
}

body {
	margin: 0px;
	padding: 0px;
}

#app {
	font-family: Roboto-Medium;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin-top: 60px;
	background-color: rgb(113, 113, 113);
	padding: 10px;
}

.content_title {
	display: flex;
	justify-content: space-between;
	margin-bottom: 17px;
}

.content_wrapper {
	display: block;
	margin: 20px;
	padding: 23px;
	background-color: #fff;
	border-radius: 14px;
}

h2 {
	margin: 0px;
	font-family: Inter;
	font-size: 20px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
}

.w_100 {
	width: 100%;
	display: flex;
}

input {
	width: 98%;
	padding: 7px;
	margin: 0;
	border-radius: 8px;
	border: 1.5px solid #4444;
	font-family: Roboto-Regular;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
}

textarea {
	width: 98%;
	padding: 3px 7px;
	margin: 0;
	border-radius: 8px;
	border: 1.5px solid #4444;
	font-family: Roboto-Regular;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
}

.insertion_area {
	border-radius: 8px;
	padding: 12px 10px 14px;
	border: 2px dashed #4444;
}

.logo_area {
	display: block;
	padding: 8px 7px 1px;
	border-radius: 8px;
	border: 1.5px solid #4444;
	width: min-content;
}

.logo_before {
	margin-top: 14px;
}

.text_description {
	font-family: Roboto-Regular;
	padding-top: 3px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	display: flex;
	justify-content: center;
}

.text_after {
	font-family: Roboto-Regular;
	font-size: 14px;
	font-weight: 400;
	line-height: 15px;
	padding-bottom: 1px;
	letter-spacing: 0em;
	color: rgba(101, 101, 101, 1);
	margin: 0;
}

.pt_3 {
	padding-top: 3px;
}

.pt_5 {
	padding-top: 5px;
}

.text_item {
	font-family: Roboto-Medium;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 1px;
}

.text_item_element {
	font-family: Roboto-Medium;
	font-size: 16px;
	margin-top: 5px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: 0em;
	text-align: left;
}

.designation {
	color: rgba(217, 29, 11, 1);
	padding-right: 3px;
}

.parameter_indentation {
	margin-bottom: 17px;
}

.text_center {
	display: flex;
	justify-content: center;
}

.btn_add {
	background: rgba(232, 242, 254, 1);
	color: rgba(4, 92, 196, 1);
	font-family: Roboto-Medium;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: 0em;
	text-align: center;
	border-radius: 5px;
	border: 0px;
	padding: 4px 7px;
	align-items: center;
	display: flex;
}

.btn_close {
	background: rgba(237, 237, 237, 1);
	color: rgba(53, 53, 53, 1);
	font-family: Roboto-Medium;
	height: 28px;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	letter-spacing: 0em;
	text-align: center;
	border-radius: 5px;
	border: 0px;
	padding: 2px 9px;
	align-items: center;
	display: flex;
}

.btn_save {
	width: 100%;
	padding: 12px;
	border-radius: 8px;
	gap: 8px;
	background: rgba(21, 136, 201, 1);
	border: 0px;
	margin-top: 14px;
	color: #fff;
	font-family: Roboto-Medium;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: 0em;
	text-align: center;
}

.icon {
	padding-right: 9px;
}
</style>
