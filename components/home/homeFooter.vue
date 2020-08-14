<template>
	<view class="py-3 px-2 footer-bg text-center">
		<view class="flex justify-between align-center mb-2">
			<view class="footer-item py-1 px-3 rounded"
			hover-class="bg-danger"
			v-for="item in footerText" :key="item"	>
			{{item}}
			</view>
		</view>
		<text space="ensp" style="color: rgb(195, 198, 202);">
			© 2020 黔B2-20080224 服务中心
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				footerText: [
					'加入我们',
					'公众号',
					'用户反馈'
				]
			}
		},
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
