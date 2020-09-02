<template>
	<view>
		<video class="w-100 animate__animated animate__slideInDown"
		:src="companyMsg.video"
		 objectFit="cover"	 :poster="$img_url + companyMsg.pictures[0]">
		 </video>
		 <view class="animate__animated animate__slideInUp">
			 <block v-for="(item,i) in companyMsg.pictures" :key="i">
				 <image class="w-100 d-block" :src="$img_url + item" mode="widthFix"></image>
			 </block>
		 </view>
		<view class="flex flex-column p-2 bottom-bg">
			<text>{{'地址：'+ companyMsg.address}}</text>
			<text>{{'介绍：'+ companyMsg.introduce}}</text>
			<text @click="callNum(companyMsg.cellphone)">{{companyMsg.contacts +'：'+ companyMsg.cellphone}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				companyMsg:{
					pictures:[]
				}
			}
		},
		onLoad() {
			this.$H.post('home/selectByCompanys').then(res =>{
				let data =  res[0];
				data.pictures = data.pictures.split(',')
				this.companyMsg = data,
				console.log('公司信息详情',data);
			})
		},
		methods: {
			callNum(num) {
				uni.makePhoneCall({
				    phoneNumber: num
				});
			}
		}
	}
</script>

<style>
.bottom-bg{
	background-color: rgb(78, 82, 94);
	color: #FFFFFF;
}
</style>
