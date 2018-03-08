class Queue{
	constructor(){
		this.arr = []
	}
	enqueue(el){
		this.arr.push(el)
	}
	dequeue(el){
		return this.arr.shift()
	}
	front(){
		return this.arr[0]
	}
	isEmpty(){
		return !this.arr.length
	}
	size(){
		return this.arr.length
	}
	print(){
		console.log(this.arr.toString())
	}
}



let queue = new Queue();
console.log(queue.isEmpty())