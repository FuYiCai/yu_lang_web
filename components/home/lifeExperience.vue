<template>
	<view>
		<view class="px-2 h3 animate__animated animate__rotateInUpLeft">成长经历</view>
		<view class="flex px-2 border-bottom">
			<scroll-view :style="{height: cpheight}" class="flex-1" scroll-y>
				<view class="scrollviewheight">
					<block v-for="item in imgArr" :key="item" class="flex flex-wrap justify-between">
						<image @click="open" class="w48 animate__animated animate__lightSpeedInLeft" :src="item" mode="widthFix"></image>
					</block>
				</view>
			</scroll-view>
			<view :style="{height: cpheight}" class="flex-1 animate__animated animate__backInLeft">
				<view class="textheight">
					<text v-for="item in textArr" :key="item"  
					space="ensp" class="font-small">
						{{item}}
					</text>
				</view>
			</view>
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
		data() {
			return {
				cpheight:'203px',//显示区域高度
				video: mp4,
				textArr:[],
				imgArr:[],
				danmu:[
					{text:'驭浪科技美女多'},{text:'驭浪科技6666666'},
					{text:'驭浪科技老板好'},	{text:'待遇兴义最好'},
				],
			}
		},
		created() {
			this.getGrowpUp()
		},
		mounted() {
			
		},
		methods: {
			getGrowpUp(){
				this.$H.post('home/selectByGrowth').then(res =>{
					this.textArr = res.map(item => item.introduce)
					this.imgArr = res.map(item => this.$img_url + item.pictures)
					this.getNodeHeight()
				})
			},
			getNodeHeight(){
				this.$nextTick(()=>{
					let query = uni.createSelectorQuery().in(this);
					query.select('.scrollviewheight').boundingClientRect();
					query.select('.textheight').boundingClientRect();
					query.exec(res => {
						console.log(res,'**********');
						this.cpheight  = Math.min(res[0].height,res[1].height) + 95+'px'
					});
				})
			},
			open() {
				this.$refs.popup.open() ;
			}
		},
	}
</script>

<style>
</style>
