class EventBus{
	constructor(){
		this.a = 1
		this.b = 2
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
	// 传递的参数
	emit(type, ...arr){
		console.log(this)
		// 判断在不在这个里面，如果再就取这个值，因为这个值是个回调函数，就可以直接调用
		if(this.events.has(type)){
			// 有参数用apply
			if(!arr.length){
				this.events.get(type).call(this)
			}else{
				this.events.get(type).apply(this,arr)
			}
		}
	}
}
var a = 2
const e = new EventBus();

e.on('abc',function(res){
	console.log(res)
	// alert(1)
})
e.emit('abc',2324)


e.on('def',function(){
	console.log(this.a)
	// alert(1)
})

e.emit('def',function(){
	console.log(this.b)
})


const event = new EventBus();

e.on('abc',function(res){
	console.log(res)
	// alert(1)
})

e.emit('abc',534)