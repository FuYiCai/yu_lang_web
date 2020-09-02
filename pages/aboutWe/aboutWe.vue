<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.$H.post('home/selectByCompanys').then(res =>{
				console.log('公司信息详情',res);
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
