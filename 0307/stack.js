let item = []

// function Stack(){

// }

// Stack.prototype.push = function(el){
// 	item.push(el)
// }

// Stack.prototype.pop = function(el){
// 	return item.pop()
// }

// Stack.prototype.peek = function(el){
// 	return item[item.length-1]
// }

// Stack.prototype.isEmpty = function(){
// 	return !!item.length
// }

// Stack.prototype.size = function(){
// 	return item.length
// }

// Stack.prototype.cleart = function() {
// 	item = []
// }

// Stack.prototype.print = function() {
// 	console.log(item.toString())
// };



// let stack = new Stack()

// stack.push(1)


// console.log(stack.isEmpty())

// stack.print()


// stack.pop()

// console.log(stack.isEmpty())



class Stack{
	constructor(){
		this.item = []
	}
	push(el){
		this.item.push(el)
	}
	pop(){
		this.item.pop()
	}	
}

