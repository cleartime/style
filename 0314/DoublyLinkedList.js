function DoublyLinkedList(){

	let Node = function(el){
		this.el = el;
		this.prev = null;
		this.next = null;
	}

	let length = 0;
	let head = null;
	let tail = null;


	this.insert = function(position, el){
		if(position<=length && position>=0){
			let node = new Node(el)
			let current;
			let prev;
			index = 0;
			if(position === 0){
				if(!head){
					head = node;
					tail = node;
				}else{
					// 想当于把current架空了，插入了进来					
					node.next = current;
					current.prev = node
					head = node;
				}
			}else if(position === length){
				current = tail;
				current.next = node;
				node.prev = current;
				tail = node
			}else{

				// 这部分暂时没看懂，以后再看，先放着，= = 
				while (index++ < position){
					prev = current;
					current = current.next;
				}
				node.next = current;
				prev.next = node;

				current.prev = node;
				node.prev = prev;
			}
			length++;

			return true;
		}else{
			return false
		}
	}

	// 这块也是后面再看
	this.removeAt = function(position){
		if(position>-1 && position<length){
			let current = head
			let prev;
			let index = 0;
			if(position === 0){
				head = current.next;
				if(length === 1){
					tail = null;
				}else{
					head.prev = null
				}
			}else if(position === length-1){
				current = tail;
				tail = current.prev;
				tail.next = null;
			}else{
				while(index++ < position){
					prev = current;
					current = current.next;
				}
				prev.next = current.next;
				current.next.prev = prev;
			}
			length--;
			return current.el
		}else{
			return null
		}
	}
}