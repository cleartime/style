function linkedlist(){

	let Node = function(el){
		this.el = el;
		this.next = null;
	}

	let length = 0;
	let head = null;

	this.append = function(el){

		let node = new Node(el);
		let current;

		if(head===null){// 说明是第一个
			head = node
		}else{
			current = head;
			// 一直循环他的next，直到找到最后一个（为空则是最后一个）
			while(current.next){
				current = current.next
			}
			// 找到最后一个了，把传进来的节点自己赋值给最后一个
			current.next = node
		}
		length++
	}

	this.insert = function(po,el){
		if(po>-1 && po < length){
			let current = head;
			let node = new Node(el);
			let previous;
			let index=0;
			if(po==0){
				node.next = current.next;
				head = node
			}else{
				// 循环的时候把当前的赋值给上一个，然后自己就变成下一个
				while(index++ < po){
					previous = current;
					current = current.next;
				}
				// 相当于把上一个的next链接到node,然后node的next链接到当前的元素，这样就把node给插入进来了，
				// 实例prev->prev.next->node->node.next->current->current.next;
				// 实际上就是把一个元素里面拆成2个元素来理解就好了，
				// prve元素左边是prve_el,右边是prev_next,
				// node元素左边是node_el，右边是node_next，
				// current元素，左边是current_el,右边是current_next；
				// 刚开始相当于prev和current手拉手，prev->prev.next->current->current.next;
				// 然后node想当第三者,就需要搬开prev和current的手prev->prev.next 这里段了current->current.next;
				// 这个时候node插入进来了就形成了上面的prev->prev.next->node->node.next->current->current.next;
				// 这样就插入进来了

				node.next = current
				previous.next = node;
			}
			length++
			return true
		}else{
			return  false+'过界了，po不正确'
		}
	}
	
	this.removeAt = function(po){
		if(po>-1 && po < length){

			let current = head;
			let previous;
			let index=0;
			if(po==0){
				head = current.next
			}else{
				// 循环的时候把当前的赋值给上一个，然后自己就变成下一个
				while(index++ < po){
					previous = current;
					current = current.next;
				}
				// 这个地方非常厉害，直接把找到当前位置的next指向下一个元素，
				// 然后把他直接赋值等于当前上一个元素，这样就留了个空挡，就是posiong这个位置的元素，
				// 所以就删除当前positong元素，找个纸画一下流程就清楚了
				previous.next = current.next;
			}
			length--
			return current.el
		}else{
			return '过界了，po不正确'
		}
	}

	this.remove = function(el){
		let index = this.indexOf(el);
		if(index == -1){
			return '没有这个元素啊'
		}
		return this.removeAt(index)
	}

	this.indexOf = function(el){
		let index = -1;
		let current = head;

		while(current){
			if(current.el === el){
				return index
			}
			index++
			current = current.next
		}
		return -1
	}

	this.isEmpty = function(){
		return !length
	}

	this.size = function(){
		return length
	}

	this.getHead = function(){
		return head
	}

	this.toString = function(){
		let current = head;
		let string = '';
		while(current){
			string += current.el + (current.next ? 'n' : '');
			current = current.next;
		}
		return string
	}

	this.print = function(){
		console.log(this.el)
	}
}



let list = new linkedlist()



list.append(15);

list.print()