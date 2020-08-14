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
					<input name="site" placeholder="请输入所在地区" />
				</view>
				<view class="flex align-center py-1 mb-3 border-bottom">
					<view class="mr-1">公司名称</view>
					<input name="companyName" placeholder="请输入公司名称" />
				</view>
				<view class="pb-3">
					<button form-type="submit">提交</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			formSubmit (e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
		},
	}
</script>

<style>
</style>
