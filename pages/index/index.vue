<template>
	<view>
		<my-header  :companyMsg="companyMsg" :companyWork="companyWork" />
		<my-swiper :initArr="swiperList" />
		<dev-case :itemData="devCase" />
		<life-experience :itemData="devCase" />
		<them-use :itemData="themUseDemo" />
		<hot-line></hot-line>
		<home-footer></home-footer>
		<!-- 客服 -->
		<movable-area class="movable">
		   <movable-view :x="x" :y="y" direction="vertical">
			   <image @click="chat" src="/static/images/kefu.png" style="width: 50px;height: 50px;" mode="aspectFill"></image>
		   </movable-view>
		</movable-area>
		<uni-popup ref="popup" type="bottom">
			<view class="bg-white rounded-top">
				<view class="p-3 text-white bg-primary rounded-top">
					小驭
				</view>
				<scroll-view scroll-y 
				scroll-with-animation
				:scroll-top="scrollTop"
				 style="height: 280px;width: 100%;padding: 10rpx;">
					<view class="msgList">
						<block v-for="(item,index) in chatMsg" :key="index">
							<view v-if="item.id === 1" class="flex mb-2 px-1 text-info">
								<image src="/static/images/userkefu.png" 
								class="flex-shrink"
								style="width: 25px;height: 25px;" mode="widthFix"></image>：
								<text>{{item.chat}}</text>
							</view>
							<!-- 用户 -->
							<view v-if="item.id === 0" class="flex justify-end mb-2 px-1" >
							<text>{{item.chat}}</text>
							：<image src="/static/images/userkefu.png" 
							class="flex-shrink"
							style="width: 25px;height: 25px;" mode="widthFix"></image>
							</view>
						</block>
					</view>
				</scroll-view>
				<view class="flex align-center border-top">
					<textarea class="flex-1 p-1"  style="height: 45px;" v-model="textareaValue" placeholder="请输入..."/>
					<view class="flex align-center px-3 bg-light" style="height: 45px;"
					 hover-class="bg-hover-light"
					 @click="sendMsg"
					 >
						发送
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import MyHeader from '@/components/home/header.vue';
	import mySwiper from '@/components/home/paddingSwiper.vue';
	import devCase from '@/components/home/devCase.vue';
	import lifeExperience from '@/components/home/lifeExperience.vue';
	import themUse from '@/components/home/themUse.vue';
	import homeFooter from '@/components/home/homeFooter.vue';
	import hotLine from '@/components/home/hotLine.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import {initCompanyWork,initCompanyMsg,swiperList,initDevCase} from '@/common/initData.js';
	export default {
		components:{
			MyHeader,
			mySwiper,
			devCase,
			lifeExperience,
			themUse,
			homeFooter,
			hotLine
		},
		data() {
			return {
				x: 0,
				y: 350,
				textareaValue:'',
				scrollTop: 0,
				chatMsg:[
					{chat:'哈哈哈飞机航空寄过来咖啡店孤苦伶仃管理局了公开方式方法是微笑',id:1},
					{chat:'寄过来咖啡店孤苦伶仃管理局了公开方式方法是微笑',id:0},
					{chat:'哈哈哈飞机航空',id:1},
					{chat:'哈哈哈飞机航空',id:0},
					{chat:'哈哈哈飞机航空',id:1},
					{chat:'哈哈哈飞机航空了寄过来咖啡店孤苦伶仃管理局了公开方式方法是微笑',id:0},
					{chat:'哈哈哈飞机航空',id:1},
					{chat:'哈哈哈飞机航空',id:0},
					{chat:'哈哈哈飞机航空',id:1},
					{chat:'哈哈哈飞机航空',id:0},
				],
				companyMsg:initCompanyMsg,
				companyWork:initCompanyWork,
				swiperList:swiperList,
				devCase:initDevCase,
				themUseDemo:[
					'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg',
					'https://i.alicdn.com/__img/imgextra/i3/2024314280/O1CN018DiR0Q1hUHkRWFKHp_!!2024314280.jpg_1200x1200q75.jpg_.webp',
					'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg',
					'https://i.alicdn.com/__img/imgextra/i3/2024314280/O1CN018DiR0Q1hUHkRWFKHp_!!2024314280.jpg_1200x1200q75.jpg_.webp',
					'https://i.alicdn.com/__img/imgextra/i3/2024314280/O1CN018DiR0Q1hUHkRWFKHp_!!2024314280.jpg_1200x1200q75.jpg_.webp',
					'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg',
					'https://i.alicdn.com/__img/imgextra/i3/2024314280/O1CN018DiR0Q1hUHkRWFKHp_!!2024314280.jpg_1200x1200q75.jpg_.webp',
				]
			}
		},
		onLoad() {
			try {
			    const res = uni.getSystemInfoSync();
				this.y = res.windowHeight - 100;
			} catch (e) {}
		},
		onShow() {
			setTimeout(()=>{
				this.initHeaderData() ;
			},3000)
		},
		watch:{
			chatMsg:function(nv){
				this.$nextTick(()=>{
					this.goToBottom()
				})
			}
		},
		methods: {
			 // 容器滚动到底部
			goToBottom() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.msgList').boundingClientRect();
				query.exec(res => {
				  const listHeight = res[0].height;
				  this.scrollTop = listHeight 
				});
			},
			sendMsg(){
				const msg = {chat:this.textareaValue,id:0};
				this.chatMsg.push(msg);
				this.textareaValue = "";
			},
			initHeaderData(){
				this.companyMsg = [
					{text:'企业愿景',prop:'',child:''},{text:'发展规划',prop:'',child:''},
					{text:'福利待遇',prop:'',child:''},{text:'团队风采',prop:'',child:''},
					{text:'活动',prop:'',child:''},
				] ;
				this.companyWork = [
					{text:'小程序',prop:'',child:[]},{text:'网站',prop:'',child:''},
					{text:'app',prop:'',child:''},{text:'系统',prop:'',child:''},
					{text:'其它',prop:'',child:''},
				];
			},
			chat(){
				this.$refs.popup.open() ;
			}
			
		}
	}
</script>

<style>
.movable{
	position: fixed;
	top: 0;
	right: 45px;
	height: 100%;
}
movable-view {
	height: 25px;
	width: 25px;
}
</style>
