// 这个数组是来表示后面最重要的排序和搜索的数据结构
function ArrayList(){
	let arr = [];
	// 插入方法
	this.inset = function(item){
		arr.push(item)
	}
	// 输出字符串
	this.toString = function(){
		return arr.join()
	}
}