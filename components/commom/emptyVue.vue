<template>
	<view class="flex justify-center align-center text-muted" style="height: 90vh;">
		{{loading?hint:'加载中~~~~'}}
	</view>
</template>

<script>
	export default {
		props:{
			hint:{
				type:String,
				default:'敬 请 期 待 ~~~~'
			},
			loading:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style>
</style>
