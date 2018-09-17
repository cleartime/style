/**
 * 使用从开始到结束的值填充数组元素，但不包括结尾
 * 例子如下
 */

var array = [1, 2, 3];
 
_.fill(array, 'a');
// => ['a', 'a', 'a']
 
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]


// 老规矩，自己先实现一个
// 需要填充的话，就用splice去做把

function _fill(...arg) {
	let arr = [];
	arr = arg[0]
	if(arg.length === 2 ){
		let len = arg[0].length,
		index = 0;
		arr = new Array(len)
		while(len--){
			arr[index++] = arg[1]
		}
	}else{
		let index=0,newarr=[];
		let len = arg[3]-arg[2];
		const length = len;
		while(len--){
			newarr[index++] = arg[1]
		}
		arr.splice(arg[2],length,...newarr)
	}
  return arr
}
// log(_fill([4, 6, 8, 10], '*', 1, 3))



/**
 * 总结
 * 1. 参数默认值代替函数体内做判断
 * 2. 获取长度要判断null值
 * 3. 返回数组的时候要懒得length，没有的话要返回空数组
 */