<template>
	<view>
	
		<view style="font-size:0;">
			<video class="w-100 animate__animated animate__slideInDown"
			 objectFit="cover"	 :poster="$img_url + dataObj.pictures[0]">
			 </video>
			 
			<image 
			class="w-100 animate__animated animate__slideInUp"
			 v-for="(item,index) in dataObj.pictures" :key="index"
			 :src="$img_url + item" mode="aspectFill"
			  @click="lookImg(item)"
			  ></image>
		</view>

		<text class="p-3" style="line-height: 1.5em;">
			{{dataObj.describes}}
		</text>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataObj:{
					pictures:[],
					describes:'',
					video:''
				}
			}
		},
		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			console.log('decocom',item);
			this.getInitData(item.id)
		},
		methods: {
			lookImg(url){ 
				uni.previewImage({
					urls:[url],
				})
			},
			getInitData(id){
				this.$H.post('home/selectByMenusId',{menuId:id}).then(res =>{
					console.log('详情数据',res);
					res.pictures = res.pictures.split(",")
					this.dataObj = res;
				})
			}
		}
	}
</script>

<style>

</style>
