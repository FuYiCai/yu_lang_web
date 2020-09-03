<template>
	<view class="wrap">
		<view class="p-2 text-white">PC 端</view>
		<case-item :caseArr="pc"></case-item>
		<view class="p-2 text-white">移动 端</view>
		<case-item :caseArr="mobile"></case-item>
	</view>
</template>

<script>
	import { constant } from '@/common/initData.js';
	import caseItem from '@/components/home/caseItem.vue';
	export default {
		components:{
			caseItem
		},
		data() {
			return {
				imgArr:[
					{text:'',url:'http://www.qishangyun.net/pc/static/picture/case1.png'},
				],
				arrData:[],
				pc:[],
				mobile:[]
			}
		},
		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			this.getInitData(item.id)
		},
		methods: {
			getInitData(id){
				this.$H.post('home/selectByMenusIdAndDecase',{menuId:id}).then(res =>{
					console.log('业务类型',res);
					// pc端；
					this.pc = res.filter(item => item.identification === constant.pc)
					// 移动端；
					this.mobile = res.filter(item => item.identification === constant.mobile)
				})
			}
		}
	}
</script>

<style scoped>
page{
	background-color: rgba(89,8,89,0.8);
	color: #FFFFFF;
}
.w33{width: 33.333%;}
.h100{height: 100rpx;}
.retract{text-indent: 25px;white-space: pre-line;}
.dian{
	overflow: hidden;
   text-overflow: ellipsis; 
   -o-text-overflow: ellipsis;
   white-space:nowrap;
}
</style>
