<template>
	<view class=""> 
		<view class="text-center py-2">
			<text class="px-2 ">他们都在使用</text>
		</view>
		<view class="flex" style="overflow-y: scroll;">
			<image style="height: 104rpx;" class="col-3 flex-shrink" 
			v-for="(item,index) in itemData"  :key="index"
			:src="$img_url + item.pictures" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	// import {swiperList} from "@/common/initData.js"
	export default {
		data() {
			return {
				itemData: [ ]
			}
		},
		created() {
			this.$H.post('home/selectByPictures').then(res =>{
				console.log('他们在用',res);
				this.itemData = res;
			})
		}
	}
</script>

<style>
	@keyframes zwyBeat {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.9);
		}
		100% {
			transform: scale(1);
		}
	}
	
	.zwyBeat {
		animation: zwyBeat 1.5s ease infinite;
	}
	.zwyHover2 {
		z-index: 999;
		position: relative;
		--color:#ff0081;
		--count:infinite;
	}
	
	.zwyHover2::before,
	.zwyHover2::after {
		position: absolute;
		content: '';
		display: block;
		width: 140%;
		height: 100%;
		left: -20%;
		z-index: -1000;
		transition: all ease-in-out 0.5s;
		background-repeat: no-repeat;
	}
	
	.zwyHover2::before {
		top: -55%;
		background-image: radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, transparent 20%, var(--color) 20%, transparent 30%), radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, transparent 10%, var(--color) 15%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%);
		background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		animation: topBubbles ease-in-out 0.75s var(--count);
		display: block;
	}
	
	.zwyHover2::after {
		bottom: -55%;
		background-image: radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, transparent 10%, var(--color) 15%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%), radial-gradient(circle, var(--color) 20%, transparent 20%);
		background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		display: block;
		animation: bottomBubbles ease-in-out 0.75s var(--count);
	}
	@keyframes topBubbles {
		0% {
			background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
			background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
		}
	
		50% {
			background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
			background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
		}
	
		100%{
			background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}
	@keyframes bottomBubbles {
		0% {
			background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
			background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
		}
	
		50% {
			background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
			background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
		}
	
		100%{
			background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}

</style>
