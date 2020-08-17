<template>
	<view>
		<view class="p-2">报名热线</view>
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
				const formdata = e.detail.value;
				console.log('form发生了submit事件，携带数据为：', formdata)
				if(regPhone.test(formdata.phone)){
					uni.showToast({	title:'请输入正确的手机号码',icon:'none'	})
				}
				else{
					uni.showToast({	title:'ok'})
				}
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
</style>
