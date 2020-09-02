<template>
	<view>
		<text>{{companyMsg.name}}</text>
		<text>{{companyMsg.address}}</text>
		<text>{{companyMsg.introduce}}</text>
		<text>{{companyMsg.cellphone}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				companyMsg:{}
			}
		},
		onLoad() {
			this.$H.post('home/selectByCompanys').then(res =>{
				console.log('公司信息详情',res);
				this.companyMsg = res[0]
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
