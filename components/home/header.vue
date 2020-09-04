<template>
	<view>
		<view class="bg-white border-bottom animate__animated animate__fadeInDown">
			<view class="w-100 flex justify-between align-center p-2">
				<text v-for="(item,index) in treeData"	 :key="index"
				 @click="headerFn(item,index)" class="iconfont"> 
				 {{item.menuName}}{{item.children.length > 0 ? '\ue7a8' : ''}} </text>
			</view>
		</view>
		<uni-popup ref="popup" type="top"
		:addMaskClass="{'backgroundColor': 'transparent'}"
		@change="popChange">
			<view 	v-if="headerTreeObj"	
			class="flex flex-wrap w-100  bg-white " >
				<view	v-for="(item,index) in headerTreeObj.children" :key="index"
				class="p-2"
				@click="headerItemFn(item)"	>
					<text>{{item.menuName}}</text>
					<text v-show="item.children.length > 0"	 class="iconfont">&#xe7a8;</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const commomText = {
		introduce:'公司介绍',
		business:'业务类型'
	};
	
	
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components:{uniPopup },
		data() {
			return {
				headTitle:[
					'logo',
					`${commomText.introduce} `,
					`${commomText.business} \ue7a8`
				],
				treeData:[],
				headTitleIndex:100,
			}
		},
		computed:{
			headerTreeObj(){
				if(this.headTitleIndex !== 100){
					return this.treeData[this.headTitleIndex]
				}
				return null;
			},
			// titleData(){
			// 	const me = this;
			// 	const data = new Map([
			// 		['companyMsg',me.companyMsg],
			// 		['companyWork',me.companyWork],
			// 	]) ;
			// 	return data.get(me.titleDataHint) ? data.get(me.titleDataHint) : [] ;
			// }
		},
		created() {
			this.menuFn()
		},
		methods: {
			// 头部菜单
			menuFn(){
				this.$H.post('home/treeselect').then(res =>{
					console.log('菜单',res);
					this.treeData = res;
				})
			},
			headerFn(item='abc',index){
				this.headTitleIndex = index;
				if(this.treeData[index].children.length > 0){
					this.$refs.popup.open();
				}
			},
			headerItemFn(item){
				console.log(item.path);
				const reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
				if(reg.test(item.path)) {
					return uni.navigateTo({
						url:'/pages/webView/webView?url='+item.path
					})
				}
				this.$refs.popup.close();
				if(item.path === 'cate') {
					return uni.navigateTo({
						url:'/pages/cateType/cateType?cate='+item.id
					})
				};
				
				
				if(item.path === "details") {
					return uni.navigateTo({
					url:'/pages/introduceDetail/introduceDetail?details='+item.id
				})
				
				}
				return uni.navigateTo({
					url:'/pages/businessType/businessType?list='+ item.id
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
