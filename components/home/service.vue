<template>
	<view>
		<movable-area class="movable">
		   <movable-view :x="x" :y="y" direction="vertical">
			   <image @click="chat" src="/static/images/kefu.png" style="width: 50px;height: 50px;" mode="aspectFill"></image>
		   </movable-view>
		</movable-area>
		<uni-popup ref="popup" type="bottom">
			<view class="bg-white rounded-top">
				<view class="p-3 text-white bg-primary rounded-top" >小驭</view>
				<scroll-view scroll-y 	scroll-with-animation	:scroll-top="scrollTop"
				 style="height: 280px;width: 100%;padding: 10rpx;">
					<view class="msgList">
						<block v-for="(item,index) in chatMsg" :key="index">
							<view v-if="item.id === 1" class="flex mb-2 px-1 text-info">
								<image src="/static/images/userkefu.png" 	class="chat-img flex-shrink"	 mode="widthFix"></image>：
								<text>{{item.chat}}</text>
							</view>
							<!-- 用户 -->
							<view v-if="item.id === 0" class="flex justify-end mb-2 px-1" >
							<text>{{item.chat}}</text>
							：<image src="/static/images/userkefu.png" 
							class="chat-img flex-shrink"  mode="widthFix"></image>
							</view>
						</block>
					</view>
				</scroll-view>
				<view class="flex align-center border-top">
					<textarea class="flex-1 p-1"  style="height: 45px;" v-model="chatValue" placeholder="请输入..."/>
					<view class="flex align-center px-3 bg-light"  style="height: 45px;"
					 hover-class="bg-hover-light"	 @click="sendMsg"	>
						发送
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		data() {
			return {
				x: 0,
				y: 350,
				chatValue:'',
				scrollTop: 0,
				chatMsg:[
					{chat:'哈哈哈飞机航空寄过来咖啡店孤苦伶仃管理局了公开方式方法是微笑',id:1},
					{chat:'寄过来咖啡店孤苦伶仃管理局了公开方式方法是微笑',id:0},
				],
			}
		},
		watch:{
			chatMsg:function(nv){
				this.$nextTick(()=>{
					this.goToBottom()
				})
			}
		},
		created() {
			try {
			    const res = uni.getSystemInfoSync();
				this.y = res.windowHeight - 100;
			} catch (e) {}
		},
		methods:{
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
				const msg = {chat:this.chatValue,id:0};
				this.chatMsg.push(msg);
				this.chatValue = "";
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
	.chat-img{
		width: 25px;height: 25px;
	}
</style>
