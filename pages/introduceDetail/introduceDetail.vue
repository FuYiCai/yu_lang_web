<template>
	<view>
		<template v-if="dataObj && dataObj!=='loding'">
			
			<jyf-parser :html="dataObj.details" ref="article"></jyf-parser>
			
			
			<!-- <view style="font-size:0;">
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
			</text> -->
		</template>
		<template v-else>
			<empty-vue :loading="dataObj" />
		</template>
		
	</view>
</template>

<script>
	import emptyVue from '@/components/commom/emptyVue.vue';
	export default {
		components:{
			emptyVue
		},
		data() {
			return {
				dataObj:false
			}
		},
		onLoad({details}) {
			this.getInitData(Number(details))
		},
		methods: {
			lookImg(url){ 
				uni.previewImage({
					urls:[url],
				})
			},
			getInitData(id){
				this.$H.post('home/selectByMenusIdAndArticle',{menuId:id}).then(res =>{
					console.log('介绍',res);
					this.dataObj = res || 'loding';
				})
			}
		}
	}
</script>

<style scoped>
page{
	background: #fafafa;
}
</style>
