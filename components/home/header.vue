<template>
	<view>
		<view class="bg-white border-bottom">
			<view class="w-100 flex justify-between align-center p-2">
				<text v-for="item in headTitle"
				 :key="item"
				 @click="headerFn(item)" class="iconfont"> {{item}} </text>
			</view>
		</view>
		<uni-popup ref="popup" type="top"
		:addMaskClass="{'backgroundColor': 'transparent'}"
		@change="popChange">
			<view	class="flex justify-between flex-wrap w-100 p-2 bg-white " >
				<view 	v-for="(item,index) in titleData" :key="index"
				@click="headerItemFn(item)"	>
					<text>{{item.text}}</text>
					<text v-show="item.child"	 class="iconfont">&#xe7a8;</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const commomText = {
		introduce:'公司介绍',
		business:'业务类型'
	}
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components:{
			uniPopup
		},
		data() {
			return {
				headTitle:[
					'logo',
					`${commomText.introduce} \ue7a8`,
					`${commomText.business} \ue7a8`
				],
				companyMsg:[
					{text:'企业愿景',prop:'',child:''},{text:'发展规划',prop:'',child:''},
					{text:'福利待遇',prop:'',child:''},{text:'团队风采',prop:'',child:''},
					{text:'活动',prop:'',child:''},
				],
				companyWork:[
					{text:'小程序',prop:'',child:[]},{text:'网站',prop:'',child:''},
					{text:'app',prop:'',child:''},{text:'系统',prop:'',child:''},
					{text:'其它',prop:'',child:''},
				],
				titleDataHint:'companyMsg'
			}
		},
		computed:{
			titleData(){
				const me = this;
				const data = new Map([
					['companyMsg',me.companyMsg],
					['companyWork',me.companyWork],
				]) ;
				return data.get(me.titleDataHint) ? data.get(me.titleDataHint) : [] ;
			}
		},
		methods: {
			headerFn(item='abc'){
				const [text] = item.split(' ');
				const data = new Map([
					[`${commomText.introduce}`,'companyMsg'],
					[`${commomText.business}`,'companyWork'],
				]) ;
				if(data.get(text)){
					this.titleDataHint = data.get(text) ;
					this.$refs.popup.open()
				}
				
			},
			headerItemFn(){
				this.$refs.popup.close()
				uni.navigateTo({
					url:'/pages/introduceDetail/introduceDetail'
				})
			},
			popChange({show}){
				// 重置弹层参数
				
			}
		},
	}
</script>

<style>
</style>
