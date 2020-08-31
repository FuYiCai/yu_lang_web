const chat {
	constructor(arg) {
		this.socket = null
		this.connectSocket()
	}
	// 连接socket
	connectSocket(){
		this.socket = uni.connectSocket({
			url:'xxxurl',
			complete: ()=> {}
		})
		// 监听连接成功
		this.socket.onOpen(()=>this.onOpen())
		// 监听接收信息
		this.socket.onMessage((res)=>this.onMessage(res))
		// 监听断开
		this.socket.onClose(()=>this.onClose())
		// 监听错误
		this.socket.onError(()=>this.onError())
	}
	// 监听打开
	onOpen(){
		console.log('socket连接成功')
		// 获取用户离线消息
		this.getMessage()
	}
	// 获取离线消息
	getMessage(){
		$H.post('xxx/getmessage')
	}
	// 监听接收消息
	onMessage(xx){
		console.log('监听接收消息',xx)
	}
	// 监听关闭
	onClose(){
		// 用户下线
		console.log('socket连接关闭')
	}
	// 监听连接错误
	onError(){
		// 用户下线
		console.log('socket连接错误')
	}
}

export default chat