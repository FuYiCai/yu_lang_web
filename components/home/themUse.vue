<template>
	<view class=""> 
		<view class="text-center py-2 zwyShake">他们都在使用</view>
		<view class="flex" style="overflow-y: scroll;">
			<image class="col-3 flex-shrink" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg" mode="widthFix"></image>
			<image class="col-3 flex-shrink" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg" mode="widthFix"></image>
			<image class="col-3 flex-shrink" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg" mode="widthFix"></image>
			<image class="col-3 flex-shrink" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202888534,3984400638&fm=26&gp=0.jpg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
</script>

<style>
.zwyShake {
	transform-origin: center bottom;
	animation: zwyShake 2s 0.5s ease-out infinite;
}
@keyframes zwyShake {
	0% {
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
		transform: rotate(0deg);
		transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
	}
}
</style>
