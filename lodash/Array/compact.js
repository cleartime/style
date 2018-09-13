/**
 * 创建一个删除了所有false值的数组。值false，null，0，“”，undefined和NaN。
 * 例子如下
 */
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]


// 自己尝试实现个
// 思路分析，就判断值去除


function _compact(arr){
	if(!arr.length){
		return []
	}
	return arr.filter(function(t,i){
		if(t){
			return t
		}
	})
}
// log(_compact([0, 1, false, 2, '', 3]))


// 下面是源码实现
// 
function __compact(array) {
  let resIndex = 0
  const result = []
  // 过滤参数为null的情况下返回空数组
  if (array == null) {
    return result
  }
  // 迭代器遍历数组
  for (const value of array) {
  	// 如果有数据则放到空数组中
    if (value) {
    	// 索引值对应增加
      result[resIndex++] = value
    }
  }
  return result
}
// log(__compact([0, 1, false, 2, '', 3]))


/**
 * 总结
 * 1.判断参数是否为null断定有没有传参
 * 2.遍历数组采用for of
 * 3.返回新数组可以采用增加索引值
 */