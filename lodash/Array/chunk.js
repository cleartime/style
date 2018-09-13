/**
 * 创建一个元素数组，将元素分成大小的长度。如果数组无法均匀分割，则最终的块将是剩余的元素。
 * 例子如下
 */
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

// 自己尝试实现个
// 分析思路，参数有2个，用第二个长度来做切割，
function _chunk(arr, num){
	let len = arr.length;
	if(len<num){
		num = len
	}
	let beishu = Math.ceil(len/num);
	let newArr = [];
	let temp = 0;
	for(let j=0 ; j<beishu ;){
		let start = temp;
		j++;
		let end = j*num;
		temp = end;
		newArr.push(arr.slice(start,end))
	}
	return newArr
}
// log(_chunk(['a', 'b', 'c', 'd'], 1))
// 基本算是实现了，但是肯定不是完整，看看源码怎么写的



function __chunk(array, size) {
	// 转换为数字，防止负数
  size = Math.max(size, 0) 	
  	// 获取数组的长度					  
  const length = array == null ? 0 : array.length		
  // 如果数组为空或者切割的长度不够1就返回空数组
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  // 判断切割之后有几个数组，new Array(2)相当于[].length=2
  const result = new Array(Math.ceil(length / size))
  // 很巧妙的循环判断，边界就是我数组的长度，你从头开始切，切到你需要的尺寸，直到大于数组的长度，就表示不能再切了
  // 再一个很巧妙的设计，之前设置了需要切的空数组,每次循环就把当前的数据加入到当前的index里面，循环满了也不用再继续加入了
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}

// log(__chunk(['a', 'b', 'c', 'd'], 1))

