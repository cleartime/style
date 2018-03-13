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
				
			}
		}
	}
}