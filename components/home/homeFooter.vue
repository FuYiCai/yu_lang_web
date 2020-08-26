<template>
	<view class="py-3 px-2 footer-bg text-center"  style="color: rgb(195, 198, 202);">
		<view class="flex justify-center align-center mb-2">
			<image src="/static/images/webcode.jpg" mode="aspectFill" style="width: 258rpx;height: 258rpx;"></image>
		</view>
		<text>关注公众号： All软件开发</text>
		<view @click="callNum" class="my-1">服务热线：0859-3225588</view>
		<text space="ensp">
			© 2020 黔B2-20080224 服务中心
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			callNum(){
				uni.makePhoneCall({
				    phoneNumber: '08593225588'
				});
			}
		}
	}
</script>

<style>
	.footer-bg{
		background-color: rgb(78, 82, 94);
	}
	.footer-item{
		color: rgb(195, 198, 202);
	    background-color: rgb(85, 89, 101);
	}
	
</style>
