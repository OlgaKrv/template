<template>
	<div id="app">
		<div class="content-wrapper" v-if="this.currentStatusIndex == 0">
			<empty />
		</div>
		<div class="content-wrapper" v-if="this.currentStatusIndex == 1">
			<edit-empty />
		</div>
		<div class="content-wrapper" v-if="this.currentStatusIndex == 2">
			<filled />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Empty from './components/Empty.vue'
import EditEmpty from './components/EditEmpty.vue'
import Filled from './components/Filled.vue'

export default {
	name: 'App',
	computed: mapGetters(['currentStatusIndex']),
	components: {
		Empty,
		EditEmpty,
		Filled,
	},
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
	min-height: 100vh;
	font-family: Roboto-Medium;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: rgb(113, 113, 113);
	padding: 0;
	padding-top: 30px;
	margin: 0px;
}

.content-title {
	display: flex;
	justify-content: space-between;
	margin-bottom: 17px;
}

.content-wrapper {
	margin: 0px auto;
	max-width: 724px;
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

.organization-data-form__input,
.organization-data-form__select {
	box-sizing: border-box;
	width: 100%;
	height: 40px;
	cursor: pointer;
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

.organization-data-form__textarea {
	box-sizing: border-box;
	width: 100%;
	cursor: pointer;
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

.organization-data-form__insertion_area {
	border-radius: 8px;
	padding: 12px 10px 14px;
	border: 2px dashed #4444;
}

.logo__area {
	display: block;
	margin-top: 7px;
	padding: 8px 7px 1px;
	border-radius: 8px;
	border: 1.5px solid #4444;
	max-width: 300px;
	object-fit: contain;
}

@media screen and (min-width: 250px) {
	.logo__area {
		max-width: 200px;
	}
}

.logo__img {
	height: 100%;
	width: 100%;
	object-fit: contain;
}

.logo {
	margin-top: 14px;
}

.organization-data-form__description {
	font-family: Roboto-Regular;
	margin: 0 0 5px;
	padding-top: 3px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	display: flex;
	justify-content: center;
}

.organization-data-form__small {
	font-family: Roboto-Regular;
	font-size: 14px;
	font-weight: 400;
	line-height: 15px;
	padding-bottom: 1px;
	letter-spacing: 0em;
	color: rgba(101, 101, 101, 1);
	margin-bottom: 5px;
}

.pt_3 {
	padding-top: 3px;
}

.pt_5 {
	padding-top: 5px;
}

.organization-data-form__label {
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
	margin-left: 0px;
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

.organization-data-form {
	margin-bottom: 17px;
}

dd {
	margin-bottom: 17px;
}

.organization-data-form__align_center {
	display: flex;
	justify-content: center;
}

.btn--center,
.text-center {
	display: flex;
	justify-content: center;
}

.btn {
	cursor: pointer;
	font-family: Roboto-Medium;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	border: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.btn--svg {
	margin-right: 8px;
}

.btn--before {
	margin-top: 14px;
}

.btn--add {
	background: rgba(232, 242, 254, 1);
	color: rgba(4, 92, 196, 1);
	letter-spacing: 0em;
	text-align: center;
	border-radius: 5px;
	padding: 4px 7px;
}

.btn--add:hover {
	background: rgb(212, 232, 254);
}

.btn--add:active {
	background: rgb(184, 216, 255);
}

.btn--close {
	background: rgba(237, 237, 237);
	color: rgba(53, 53, 53, 1);
	height: 28px;
	letter-spacing: 0em;
	text-align: center;
	border-radius: 5px;
	padding: 2px 9px;
}

.btn--close:hover {
	background: rgb(210, 210, 210);
}

.btn--close:active {
	background: rgb(172, 172, 172);
}

.btn--save {
	width: 100%;
	padding: 12px;
	border-radius: 8px;
	gap: 8px;
	background: rgba(21, 136, 201);
	color: #fff;
	letter-spacing: 0em;
}

.btn--save:hover {
	background: rgb(62, 162, 220);
}

.btn--save:active {
	background: rgb(50, 179, 254);
}

.icon {
	padding-right: 9px;
}
</style>
