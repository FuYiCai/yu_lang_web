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
			<view 
			v-if="SlectHeaderItem"
			class="flex justify-between flex-wrap w-100 p-2 bg-white " >
				<view 
				v-for="(item,index) in titleData" :key="index"
				@click="headerItemFn(item)"
				>
					<text>{{item.text}}</text>
				</view>
			</view>
			<view v-else>
				<video class="w-100"
				 poster="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg"></video>
				 <image  class="w-100"
				 src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1754120780,1511544272&fm=26&gp=0.jpg" ></image>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	const commomText = {
		introduce:'公司介绍',
		business:'业务类型'
	}
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
					{text:'企业愿景',prop:''},{text:'发展规划',prop:''},
					{text:'福利待遇',prop:''},{text:'团队风采',prop:''},
					{text:'活动',prop:''},
				],
				SlectHeaderItem:true,
				companyWork:[
					{text:'小程序',prop:''},{text:'网站',prop:''},
					{text:'app',prop:''},{text:'系统',prop:''},
					{text:'其它',prop:''},
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
				this.SlectHeaderItem = false ;
			},
			popChange({show}){
				// 重置弹层参数
				if(!show){
					this.SlectHeaderItem = true;
				}
			}
		},
	}
</script>

<style>
</style>
