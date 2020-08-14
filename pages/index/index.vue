<template>
	<view>
		<my-header></my-header>
		<my-swiper></my-swiper>
		<dev-case></dev-case>
		<life-experience></life-experience>
		<them-use></them-use>
		<hot-line></hot-line>
		<home-footer></home-footer>
	</view>
</template>

<script>
	import MyHeader from '@/components/home/header.vue';
	import mySwiper from '@/components/home/paddingSwiper.vue';
	import devCase from '@/components/home/devCase.vue';
	import lifeExperience from '@/components/home/lifeExperience.vue';
	import themUse from '@/components/home/themUse.vue';
	import homeFooter from '@/components/home/homeFooter.vue';
	import hotLine from '@/components/home/hotLine.vue';
	
	export default {
		components:{
			MyHeader,
			mySwiper,
			devCase,
			lifeExperience,
			themUse,
			homeFooter,
			hotLine
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {

			
		}
	}
</script>

<style scoped>


</style>
