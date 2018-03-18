class Dictionary{
	constructor(){
		this.obj = {};
	}
	set(key,val){
		this.obj[key] = val
	}
	delete(key){
		if(this.has(key)){
			delete this.obj[key]
			return true
		}
		return false
	}
	has(key){
		return key in this.obj
	}
	get(key){
		return this.has(key)
		?
		this.obj[key]
		:
		undefined
	} 
	clear(){
		this.obj = {}
	}
	size(){
		return Object.keys(this.obj).length
	}
	keys(){
		return Object.keys(this.obj)
	}
	values(){
		return Object.values(this.obj)
	}
	getItems(){
		return this.obj
	}
}