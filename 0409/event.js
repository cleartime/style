// 这个是最简单的，但是只能触发一个
class EventBus{
	constructor(){
		// 用map来存储key和value
		this.events = new Map();
	}
	// 监听event类型
	// 传递一个类型和一个回调函数
	on(type, cb){
		// 存到events里面去
		this.events.set(type,cb)
	}
	// 触发这个event
	// 触发的类型
	emit(type){
		// 判断在不在这个里面，如果再就取这个值，因为这个值是个回调函数，就可以直接调用
		if(this.events.has(type)){
			this.events.get(type)()
		}
	}
}

const e = new EventBus();

e.on('abc',function(){
	alert(1)
})
e.emit('abc')
