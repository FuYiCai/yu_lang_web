<template>
	<view class="pb-2 border-bottom">
		<view  class="p-2 h3 animate__animated animate__backInLeft">开发案例</view>
		<view class="flex w-100">
			<view :style="{height: cpheight}" class="flex-1 pl-2 animate__animated animate__backInLeft">
				<view class="textheight">
					<text v-for="item in textArr" :key="item" class="font-small">
						{{item}}
					</text>
				</view>
			</view>
			<scroll-view :style="{height: cpheight}" class="flex-1" scroll-y>
				<view class="scrollviewheight">
					<block v-for="(item,index) in imgArr" :key="index" class="flex flex-wrap justify-between">
						<image @click="openPop(item)" class="w48 animate__animated animate__backInRight" :src="item.url" mode="widthFix"></image>
					</block>
				</view>
			</scroll-view>
		</view>
		<uni-popup ref="popup">
			<view style="height: 680rpx;width: 100vw;" class="tower-swiper" @touchmove="TowerMove" @touchstart="TowerStart" @touchend="TowerEnd">
				<view class="tower-item"
				 
				 :class="item.zIndex==1?'none':''" v-for="(item,index) in swiperList" :key="index" 
				:style="[{width:towerItem,'marginLeft': `calc(${item.mLeft} * 100rpx - ${mLeft} )`,'--index': item.zIndex,'--left':item.mLeft}]" 
				:data-direction="direction">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components:{uniPopup},
		data() {
			return {
				mLeft:'180rpx',// 手机16:9 ; 180rpx pc 4:3 ; 260;
				towerItem:'349rpx', // px 510rpx ,手机349rpx
				cpheight:'203px',//显示区域高度
				textArr:[],
				imgArr:[],
				swiperList: [{
					type: 'image',
					url: 'http://www.mikeidea.com/public/uploads/images/20200703/1aa6d230f17f4a980dd01f856d370d13.jpg'
				},
				],
				towerStart: 0,
				direction: ''
			}
		},
		created() {
			this.getCase()
		},
		methods: {
			getNodeHeight(){
				let query = uni.createSelectorQuery().in(this);
				query.select('.scrollviewheight').boundingClientRect();
				query.select('.textheight').boundingClientRect();
				query.exec(res => {
					this.cpheight  = Math.min(res[0].height,res[1].height) + 95+'px'
				});
			},
			openPop(item){
				// 目前后台只给一张图，不好看，copy一下
				this.swiperList = [item,item,item];
				// pc端
				if(item.identification === 101){
					this.mLeft = '260rpx';
					this.towerItem = '510rpx';
				}else{
					this.mLeft = '180rpx';
					this.towerItem = '349rpx';
				}
				this.TowerSwiper('swiperList');
				this.$refs.popup.open()
			},
			// 获取开发案例数据
			getCase(){
				this.$H.post('home/selectByDevcases').then(res =>{
					console.log('开发案例',res);
					this.textArr = res.map(item => item.title)
					this.imgArr = res.map(item => {
						return {
							url:this.$img_url + item.picture,
							identification:item.identification,
							type:'image'
						}
					});
					uni.$emit('update',{imgArr:this.imgArr})
					this.$nextTick(()=>{
						this.getNodeHeight()
					})
				})
			},
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = JSON.parse(JSON.stringify(this[name]));
				list.forEach((item,i) =>{
					item.zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					item.mLeft = i - parseInt(list.length / 2);
				})
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
	/* width: 349rpx; */
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
	/* margin-left: calc(var(--left) * 100rpx - var(--mleft)); */
	z-index: var(--index);
}

</style>
