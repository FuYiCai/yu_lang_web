<template>
	<swiper autoplay circular style="height: 420rpx;" class="border-bottom bg-hover-light animate__animated animate__fadeInUp">
		<swiper-item class="swiper-item" v-for="(item,index) in initArr" :key="index">
			<image :src="item.url" ></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props:{
			initArr:{
				type:Array,
				required:true
			}
		}
	}
</script>

<style lang="less">
	.swiper-item{
		width: 610rpx !important;
		left: 70rpx;
		box-sizing: border-box;
		padding: 10rpx 0rpx 10rpx;
		image{
			width: 100%;
			display: block;
			height: 100%;
			border-radius: 10rpx;
			-webkit-transform: scale(0.9);
			transform: scale(0.9);
			-webkit-transition: all 0.2s ease-in 0s;
			transition: all 0.2s ease-in 0s;
			overflow: hidden;
		}
	}
</style>
