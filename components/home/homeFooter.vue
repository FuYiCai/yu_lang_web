<template>
	<view class="py-3 px-2 footer-bg text-center"  style="color: rgb(195, 198, 202);">
		<view class="flex justify-center align-center mb-2">
			<image @click="previewImage" :src="xxx" mode="aspectFill" style="width: 258rpx;height: 258rpx;"></image>
		</view>
		<text>关注公众号： All软件开发</text>
		<view @click="callNum" class="my-1">服务热线：0859-3225588</view>
		<text space="ensp" @click="webview">
			© {{webdata.icpPreparation}}
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webdata:{},
				xxx:'/static/images/webcode.jpg'
			}
		},
		created() {
			this.$H.post('home/selectByWebsite').then(res =>{
				console.log('selectByWebsite',res);
				this.webdata = res[0]
			})
		},
		methods:{
			callNum(){
				uni.makePhoneCall({
				    phoneNumber: '08593225588'
				});
			},
			previewImage(){ 
				uni.previewImage({
					urls: [this.xxx]
				});
			},
			webview(){
				uni.navigateTo({
					url:'/pages/webView/webView'
				})
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
