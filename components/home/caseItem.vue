<template>
	<view class="flex flex-wrap justify-between p-2">
		<block v-for="(item,index) in caseArr" :key="index">
			<view class="mb-2 animate__animated animate__zoomIn" >
				<image style="width: 350rpx;height: 400rpx;" class="mb-2 flex-shrink" 
				:src="$img_url + item.picture" mode="aspectFill"></image>
				<view style="width: 330rpx;"  class="dian">{{item.title}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			caseArr:{
				type:Array,
				default:()=>[]
			}
		}
	}
</script>

<style>
</style>
