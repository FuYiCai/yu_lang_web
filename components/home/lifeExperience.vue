<template>
	<view>
		<view class="px-2 h3 animate__animated animate__rotateInUpLeft">成长经历</view>
		<view class="flex px-2">
			<image @click="open" class="flex-1 animate__animated animate__lightSpeedInLeft" :src="itemData.url" mode="aspectFill"></image>
			<text space="ensp" class="flex-1 pl-2 font-small flex-shrink animate__animated animate__lightSpeedInRight">
				{{itemData.text}}
			</text>
		</view>
		<uni-popup ref="popup">
			<video class="rounded" autoplay enable-danmu  objectFit="fill"
			 :src="video" :danmu-list="danmu" ></video>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import mp4 from '@/static/man.mp4';
	export default {
		components:{
			uniPopup
		},
		props:{
			itemData:{
				type:Object,
				required:true
			}
		},
		data() {
			return {
				video: mp4,
				danmu:[
					{text:'驭浪科技美女多'},{text:'驭浪科技6666666'},
					{text:'驭浪科技老板好'},	{text:'待遇兴义最好'},
				]
			}
		},
		methods: {
			open() {
				this.$refs.popup.open() ;
			}
		},
	}
</script>

<style>
</style>
