<template>
	<view>
	
		<view style="font-size:0;">
			<video class="w-100"
			 poster="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg"></video>
			 
			<image 
			class="w-100"
			 v-for="(item,index) in swiperList" :key="index"
			 :src="item.url" mode="aspectFill"
			  @click="lookImg(item.url)"
			  ></image>
		</view>

		<text class="p-3" style="line-height: 1.5em;">
			“前程无忧”(NASDAQ:JOBS)是中国具有广泛影响力的人力资源服务供应商，在美国上市的中国人力资源服务企业，创立了网站+猎头+RPO+校园招聘+管理软件的全方位招聘方案。51Job专业人才招聘网站，海量名企职位招聘信息和工作机会，免费注册填简历，轻松找工作。
		</text>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dotStyle: true,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1779655133,2327716287&fm=26&gp=0.jpg'
				},  {
					id: 2,
					type: 'image',
					url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3554102788,628046505&fm=26&gp=0.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3004385117,3491212726&fm=26&gp=0.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1365010347,3383673276&fm=26&gp=0.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2706478818,1096892819&fm=26&gp=0.jpg'
				},],
			}
		},
		onLoad() {
			
		},
		methods: {
			lookImg(url){
				uni.previewImage({
					urls:[url],
				})
			}
		}
	}
</script>

<style>

</style>
