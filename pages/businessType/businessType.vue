<template>
	<view class="wrap">
		<view class="flex flex-wrap pl-2 pt-2">
			<block v-for="(item,index) in imgArr" :key="index">
				<image class="w33 pr-2 mb-2 animate__animated animate__zoomIn" :src="item.url" mode="widthFix"></image>
			</block>
		</view>
		
		<view class="pl-2 ">
			<image class="animate__animated animate__heartBeat" src="http://www.qishangyun.net/pc/static/picture/about_title1.png"  style="height: 40rpx;width: 80%;"  mode="aspectFit"></image>
			<view class="flex">
				<image class="flex-1 flex-shrink  animate__animated animate__backInDown" src="http://www.qishangyun.net/pc/static/picture/about_img.png" mode="aspectFit"></image>
				<view class="flex-1 pl-1 ">
					<view class="flex mb-1 animate__animated animate__swing">
						<image class="w33 h100 " src="http://www.qishangyun.net/pc/static/picture/about_ico1.png" mode="aspectFit"></image>
						<image class="w33 h100 px-1"  src="http://www.qishangyun.net/pc/static/picture/about_ico2.png" mode="aspectFit"></image>
						<image class="w33 h100"  src="http://www.qishangyun.net/pc/static/picture/about_ico3.png" mode="aspectFit"></image>
					</view>
					<view  class="retract text-white animate__animated animate__backInRight">
						驭浪科技技术有限公司是一个专项定制小程序开发、网站建设、APP开发、H5宣传单等的互联网开发服务平台。
						致力于将传统服务行业有效的与互联网技术进行结合、品牌塑造，为更多中小企业定制线上线下整合解决方案。为企业将产品推广到线上，增加产品曝光度，助企业准确连接到客户，有效地提升企业消费者体验与互联网营销核心竞争力。
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArr:[
					{text:'',url:'http://www.qishangyun.net/pc/static/picture/case1.png'},
					{text:'',url:'http://www.qishangyun.net/pc/static/picture/case2.png'},
					{text:'',url:'http://www.qishangyun.net/pc/static/picture/case3.png'},
					{text:'',url:'http://www.qishangyun.net/pc/static/picture/case4.png'},
					{text:'',url:'http://www.qishangyun.net/pc/static/picture/case5.png'},
					{text:'',url:'http://www.qishangyun.net/pc/static/picture/case6.png'},
					{text:'',url:'http://www.qishangyun.net/pc/static/picture/case7.png'},
					{text:'',url:'http://www.qishangyun.net/pc/static/picture/case8.png'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.wrap{
	height: 100vh;
	background-color: rgba(51,51,51,0.8);
}
.w33{width: 33.333%;}
.h100{height: 100rpx;}
.retract{text-indent: 25px;white-space: pre-line;}
</style>
