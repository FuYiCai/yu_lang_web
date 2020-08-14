<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("common/common.css");
	@import url("common/init.css");
	@font-face {
	  font-family: 'iconfont';  /* project id 2005872 */
	  src: url('//at.alicdn.com/t/font_2005872_c9lq9eiq947.eot');
	  src: url('//at.alicdn.com/t/font_2005872_c9lq9eiq947.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_2005872_c9lq9eiq947.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_2005872_c9lq9eiq947.woff') format('woff'),
	  url('//at.alicdn.com/t/font_2005872_c9lq9eiq947.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_2005872_c9lq9eiq947.svg#iconfont') format('svg');
	}
</style>
