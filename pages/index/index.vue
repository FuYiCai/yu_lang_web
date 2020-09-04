<template>
	<view>
		<my-header />
		<my-swiper />
		<dev-case />
		<!-- 生活经历 -->
		<life-experience />
		<them-use />
		<!-- 报名热线 -->
		<hot-line></hot-line>
		<!-- 客服 -->
		<service></service>
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
	import service from '@/components/home/service.vue';
	export default {
		components:{
			MyHeader,
			mySwiper,
			devCase,
			lifeExperience,
			themUse,
			homeFooter,
			hotLine,
			service
		},
		
	}
</script>

<style>

</style>
