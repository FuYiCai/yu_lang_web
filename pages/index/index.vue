<template>
	<view>
		<my-header  :companyMsg="companyMsg" :companyWork="companyWork" />
		<my-swiper :initArr="swiperList" />
		<dev-case :itemData="devCase" />
		<life-experience :itemData="devCase" />
		<them-use :itemData="themUseDemo" />
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
	
	import {initCompanyWork,initCompanyMsg,swiperList,initDevCase} from '@/common/initData.js';
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
				companyMsg:initCompanyMsg,
				companyWork:initCompanyWork,
				swiperList:swiperList,
				devCase:initDevCase,
				themUseDemo:[
					'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg',
					'https://i.alicdn.com/__img/imgextra/i3/2024314280/O1CN018DiR0Q1hUHkRWFKHp_!!2024314280.jpg_1200x1200q75.jpg_.webp',
					'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg',
					'https://i.alicdn.com/__img/imgextra/i3/2024314280/O1CN018DiR0Q1hUHkRWFKHp_!!2024314280.jpg_1200x1200q75.jpg_.webp',
					'https://i.alicdn.com/__img/imgextra/i3/2024314280/O1CN018DiR0Q1hUHkRWFKHp_!!2024314280.jpg_1200x1200q75.jpg_.webp',
					'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg',
					'https://i.alicdn.com/__img/imgextra/i3/2024314280/O1CN018DiR0Q1hUHkRWFKHp_!!2024314280.jpg_1200x1200q75.jpg_.webp',
				]
			}
		},
		onShow() {
			setTimeout(()=>{
				this.initHeaderData() ;
			},3000)
		},
		methods: {
			initHeaderData(){
				this.companyMsg = [
					{text:'企业愿景',prop:'',child:''},{text:'发展规划',prop:'',child:''},
					{text:'福利待遇',prop:'',child:''},{text:'团队风采',prop:'',child:''},
					{text:'活动',prop:'',child:''},
				] ;
				this.companyWork = [
					{text:'小程序',prop:'',child:[]},{text:'网站',prop:'',child:''},
					{text:'app',prop:'',child:''},{text:'系统',prop:'',child:''},
					{text:'其它',prop:'',child:''},
				];
			}
			
		}
	}
</script>

<style>

</style>
