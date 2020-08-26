<template>
	<view class="pb-2 border-bottom">
		<view class="p-2 h3 animate__animated animate__backInLeft">开发案例</view>
		<view class="flex">
			<view class="flex-1 pl-2 animate__animated animate__backInLeft">
				<text space="ensp" class="font-small">
					{{itemData.text}}
				</text>
			</view>
			<image	 @click="openPop" class="flex-1 flex-shrink animate__animated animate__backInRight" :src="itemData.url" mode="aspectFit"></image>
			<uni-popup ref="popup">
				<view style="height: 620rpx;width: 100vw;" class="tower-swiper" @touchmove="TowerMove" @touchstart="TowerStart" @touchend="TowerEnd">
					<view class="tower-item" :class="item.zIndex==1?'none':''" v-for="(item,index) in swiperList" :key="index" :style="[{'--index': item.zIndex,'--left':item.mLeft}]" :data-direction="direction">
						<view class="swiper-item">
							<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
							<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components:{uniPopup	},
		props:{
			itemData:{
				type:Object,
				required:true
			}
		},
		data() {
			return {
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'http://www.mikeidea.com/public/uploads/images/20200703/1aa6d230f17f4a980dd01f856d370d13.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'http://www.mikeidea.com/public/uploads/images/20200506/a467dd1faed2c94e17d80e35cacffd91.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'http://www.mikeidea.com/public/uploads/images/20200703/1aa6d230f17f4a980dd01f856d370d13.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'http://www.mikeidea.com/public/uploads/images/20200506/a467dd1faed2c94e17d80e35cacffd91.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'http://www.mikeidea.com/public/uploads/images/20200703/1aa6d230f17f4a980dd01f856d370d13.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				towerStart: 0,
				direction: ''
			}
		},
		created() {
			this.TowerSwiper('swiperList');
		},
		methods: {
			openPop(){
				this.$refs.popup.open()
			},
			
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},
			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},
			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		},
	}
</script>

<style>

.tower-swiper {
	height: 620rpx;
	position: relative;
	max-width: 750rpx;
	overflow: hidden;
}

.tower-swiper .tower-item {
	position: absolute;
	width: 349rpx;
	height: 680rpx;
	top: 0;
	bottom: 0;
	left: 50%;
	margin: auto;
	transition: all 0.2s ease-in 0s;
	opacity: 1;
}

.tower-swiper .tower-item.none {
	opacity: 0;
}

.tower-swiper .tower-item .swiper-item {
	width: 100%;
	height: 100%;
	border-radius: 6rpx;
	overflow: hidden;
}

.tower-swiper .tower-item {
	transform: scale(calc(0.5 + var(--index) / 10));
	margin-left: calc(var(--left) * 100rpx - 180rpx);
	z-index: var(--index);
}
</style>
