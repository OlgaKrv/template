<template>
	<div id="app">
		<div v-if="this.currentStatusIndex == 0"><empty /></div>
		<div v-if="this.currentStatusIndex == 1"><edit-empty /></div>
		<div v-if="this.currentStatusIndex == 2"><filled /></div>
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

input,
select {
	width: 100%;
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

textarea {
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
	cursor: pointer;
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
	cursor: pointer;
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
	cursor: pointer;
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
