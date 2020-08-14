<template>
	<swiper autoplay circular
	 style="height: 420rpx;"
	 class="border-bottom bg-secondary">
		<swiper-item class="swiper-item">
			<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2049349271,1991800259&fm=26&gp=0.jpg" ></image>
		</swiper-item>
		<swiper-item class="swiper-item">
			<image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3778126105,3499044640&fm=26&gp=0.jpg" ></image>
		</swiper-item>
		<swiper-item class="swiper-item">
			<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2049349271,1991800259&fm=26&gp=0.jpg" ></image>
		</swiper-item>
		<swiper-item class="swiper-item">
			<image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3778126105,3499044640&fm=26&gp=0.jpg" ></image>
		</swiper-item>
	</swiper>
</template>

<script>
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
