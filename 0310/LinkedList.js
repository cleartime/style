class LinkedList{
	constructor(el, next){
		this.arr = []
		this.el = '';
		this.next = null;		
	}
	append(el){
		this.arr.push(el)
	}
	insert(position,el){
		this.arr.splice(position,0,el)
	}
	remove(el){
		let index = this.arr.indexOf(el);
		this.arr.splice(index,1)
	}
	indexOf(el){
		return	this.arr.indexOf(el);
	}
	removeAt(position){
		this.arr.splice(position,1)
	}
	isEmpty(){
		return !this.arr.length
	}
	size(){
		return this.arr.length
	}
	toString(){
		return this.arr.toString()
	}
}


