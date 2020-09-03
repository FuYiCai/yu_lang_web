const initCompanyMsg = [
	{text:'企业愿景',prop:'',child:''},{text:'发展规划',prop:'',child:''},
	{text:'福利待遇',prop:'',child:''},{text:'团队风采',prop:'',child:''},
	{text:'活动',prop:'',child:''},
];
const initCompanyWork = [
	{text:'小程序',prop:'',child:[]},{text:'网站',prop:'',child:''},
	{text:'app',prop:'',child:''},{text:'系统',prop:'',child:''},
	{text:'其它',prop:'',child:''},
];

const swiperList = [ {
		id: 2,
		type: 'image',
		url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3554102788,628046505&fm=26&gp=0.jpg'
	}, {
		id: 3,
		type: 'image',
		url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3004385117,3491212726&fm=26&gp=0.jpg'
	}, {
		id: 4,
		type: 'image',
		url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1365010347,3383673276&fm=26&gp=0.jpg'
	}, {
		id: 5,
		type: 'image',
		url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2706478818,1096892819&fm=26&gp=0.jpg'
	},
];

const initDevCase = {
	text:`强大的移动商城
			
		助力搭建小程序+公众号移动商城
			
		百余种促销玩法
			
		直播、拼团、砍价、周期购、发券宝有效促进转化
			
		完善客户SCRM管理
			
		数字化会员管理体系，让您的客户二次复购变得简单
			
		裂变分销拓展销售渠道
			
		让您的顾客带来更多顾客，帮您实现销量裂变式增长`,
	url:'https://cdn2.weimob.com/saas/@assets/saas-fe-www-web-stc/img/nweb/topic/xcx/3-2@2x.png?20200426',
}
const constant = {
	pc:101, //pc端
	mobile:102
}
export {
	initCompanyMsg,
	initCompanyWork,
	swiperList,
	initDevCase,
	constant
}
 	// 	<view class="pl-2 ">
		// 	<image class="animate__animated animate__heartBeat" src="http://www.qishangyun.net/pc/static/picture/about_title1.png"  style="height: 40rpx;width: 80%;"  mode="aspectFit"></image>
		// 	<view class="flex">
		// 		<image class="flex-1 flex-shrink  animate__animated animate__backInDown" src="http://www.qishangyun.net/pc/static/picture/about_img.png" mode="aspectFit"></image>
		// 		<view class="flex-1 pl-1 ">
		// 			<view class="flex mb-1 animate__animated animate__swing">
		// 				<image class="w33 h100 " src="http://www.qishangyun.net/pc/static/picture/about_ico1.png" mode="aspectFit"></image>
		// 				<image class="w33 h100 px-1"  src="http://www.qishangyun.net/pc/static/picture/about_ico2.png" mode="aspectFit"></image>
		// 				<image class="w33 h100"  src="http://www.qishangyun.net/pc/static/picture/about_ico3.png" mode="aspectFit"></image>
		// 			</view>
		// 			<view  class="retract text-white animate__animated animate__backInRight">
		// 				驭浪科技技术有限公司是一个专项定制小程序开发、网站建设、APP开发、H5宣传单等的互联网开发服务平台。
		// 				致力于将传统服务行业有效的与互联网技术进行结合、品牌塑造，为更多中小企业定制线上线下整合解决方案。为企业将产品推广到线上，增加产品曝光度，助企业准确连接到客户，有效地提升企业消费者体验与互联网营销核心竞争力。
		// 			</view>
		// 		</view>
		// 	</view>
		// </view> 