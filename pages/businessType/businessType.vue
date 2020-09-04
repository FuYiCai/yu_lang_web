<template>
	<view>
		<template v-if="caseArr">
			<case-item :caseArr="caseArr"></case-item>
		</template>
		<template v-else>
			<empty-vue></empty-vue>
		</template>
	</view>
</template>

<script>
	import { constant } from '@/common/initData.js';
	import caseItem from '@/components/home/caseItem.vue';
	import emptyVue from '@/components/commom/emptyVue.vue';
	export default {
		components:{
			caseItem,
			emptyVue
		},
		data() {
			return {
				caseArr:false
			}
		},
		onLoad({list}) {
			console.log('option');
			this.getInitData(Number(list));
		},
		methods: {
			getInitData(id){
				this.$H.post('home/selectByMenuIdAndDevcases',{menuId:id}).then(res =>{
					console.log('案例',res);
					this.caseArr = res;
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
