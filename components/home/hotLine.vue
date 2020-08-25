<template>
	<view>
		<view class="py-3 px-2 d-inline-block zwyShake">报名热线</view>
		<view  class="px-2">
			<form @submit="formSubmit" @reset="formReset">
				<view class="flex align-center py-1 mb-3 border-bottom">
					<view class="mr-1">手机号</view>
					<input type="number" maxlength="11" name="phone" placeholder="请输入手机号" />
				</view>
				<view class="flex align-center py-1 mb-3 border-bottom">
					<text space="emsp" class="mr-1">姓 名</text>
					<input maxlength="11" name="name" placeholder="请输入姓名" />
				</view>
				<view class="flex align-center py-1 mb-3 border-bottom">
					<view class="mr-1">所在地区</view>
					<input name="site" disabled  placeholder="请选择所在地区"
					  class="flex-1"
					  @tap="regionVisible=true"
					  :value="result.result"
					 />
				</view>
				<view class="flex align-center py-1 mb-3 border-bottom">
					<view class="mr-1">公司名称</view>
					<input name="companyName"	 placeholder="请输入公司名称" />
				</view>
				<view class="pb-3">
					<button form-type="submit">提交</button>
				</view>
			</form>
			<w-picker
				:visible.sync="regionVisible"
				mode="region"
				:value="defaultRegion"
				default-type="value"
				:hide-area="false"
				@confirm="onConfirm($event,'region')"
				@cancel="onCancel"
				ref="region" 
			></w-picker>
		</view>
	</view>
</template>

<script>
	import {regPhone} from '@/utils/reg.js';
	import wPicker from '@/components/w-picker/w-picker.vue';
 	export default {
		components:{
			wPicker
		},
		data() {
			return {
				regionVisible:false,
				result:{
					result:""
				},
				defaultRegion:["520000","522300","522301"]
			}
		},
		methods: {
			formSubmit (e) {
				const {companyName,name,phone,site} = e.detail.value ;
				if(regPhone.test(phone)){
					return	uni.showToast({	title:'请输入正确的手机号码',icon:'none'	})
				}
				uni.showToast({	title:'提交中',mask:true,icon:'none'});
				this.$H.post().then(res =>{
					console.log(res)
				})
			},
			onConfirm(res){
				this.result=res;
				console.log(res)
			},
			onCancel(){
				
			}
		},
	}
</script>

<style>
	.zwyShake {
		background-image: -webkit-linear-gradient(left, #f60, #DD524D 25%, #3499cd 50%, #DD524D 75%, red);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-background-size: 200% 100%;
		font-weight: bold;
		
		transform-origin: center bottom;
		animation: zwyShake 2s 0.5s ease-out infinite;
	}
	@keyframes zwyShake {
		0% {
			background-position: 0 0;
			transform: rotate(0deg);
			transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
		}
	
		10% {
			transform: rotate(-12deg);
			transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
		}
	
		20% {
			transform: rotate(12deg);
			transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
		}
	
		28% {
			transform: rotate(-10deg);
			transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
		}
	
		36% {
			transform: rotate(10deg);
			transition-timing-function: cubic-bezier(0.755, .5, .855, .06);
		}
	
		42% {
			transform: rotate(-8deg);
			transition-timing-function: cubic-bezier(0.755, .5, .855, .06);
		}
	
		48% {
			transform: rotate(8deg);
			transition-timing-function: cubic-bezier(0.755, .5, .855, .06);
		}
	
		52% {
			transform: rotate(-4deg);
			transition-timing-function: cubic-bezier(0.755, .5, .855, .06);
		}
	
		56% {
			transform: rotate(4deg);
			transition-timing-function: cubic-bezier(0.755, .5, .855, .06);
		}
	
		60% {
			transform: rotate(0deg);
			transition-timing-function: cubic-bezier(0.755, .5, .855, .06);
		}
	
		100% {
			background-position: -100% 0;
			transform: rotate(0deg);
			transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
		}
	}
	
</style>
