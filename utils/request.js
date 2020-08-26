import config from './config.js';

const common =  {
	baseUrl: config.base_url,
	header:{
		'content-Type':'application/json;charset=UTF-8'
	},
	data:{},
	method:'GET',
}

const request = (options = {}) => {
		options.url = common.baseUrl + options.url
		options.header = options.header || common.header
		options.data = options.data || common.data
		options.method = options.method || common.method
	
		return new Promise((res,rej)=>{
			uni.request({
				...options,
				success(result) {
					const {data,code,msg} = result.data;
					if(code === 200){
						return	res(data)
					}
					return rej(msg)
				},
				fail(error) {
					return rej(error)
				}
			});
		})
	}

export default {
	get(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'GET'
		return request(options)
	},
	post(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'POST'
		return request(options)
	}

}