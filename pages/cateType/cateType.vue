<template>
	<view>
		<scroll-view scroll-x>
			<view class="w-100 p-2 text-center border-top">
			    {{tabData.type}}
			</view>
			<table  class="text-center" style="overflow: scroll;" >
				<tr  >
				  <td style="width: 30%;">组件</td>
				  <td>框架</td>
				  <td>语言</td>
				  <td>数据库</td>
				</tr>
				<block v-for="(item,index) in tabData.assembly"  :key="index">
					<tr >
						<td class="border">{{item}} </td>
						<td v-if="index===0"  :rowspan="assemblyLen" >{{tabData.frames}}</td>
						<td v-if="index===0"   :rowspan="assemblyLen">{{tabData.language}}</td>
						<td v-if="index===0"  :rowspan="assemblyLen">{{tabData.database}}</td>
					</tr>
				</block>
			</table >
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabData:{assembly:[]}
			}
		},
		computed:{
			assemblyLen(){
				return this.tabData.assembly.length
			}
		},
		onLoad({cate}) {
			console.log('option');
			this.getInitData(Number(cate));
		},
		methods: {
			getInitData(id){
				this.$H.post('home/selectByDevelType',{menuId:id}).then(res =>{
					if(typeof res.assembly === 'string'){
						res.assembly  = res.assembly.split('、')
					}
					console.log('业务类型',res);
					this.tabData = res;
				})
			}
		}
	}
</script>

<style scoped>
table{
	 border-collapse:collapse;
	 border:1px solid #dee2e6;
}
td{
	height: 60rpx;
	border:1px solid #dee2e6;
}
.b-black{
	border:1px solid #dee2e6;
}
</style>
