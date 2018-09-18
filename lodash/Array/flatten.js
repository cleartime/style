 /*
 * 重点了，将阵列展平为单层深度。
 * 例子如下
 */

_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]


// 老规矩，自己先实现一个
// 单层的话就用...去消除第一层

function flatten(arr) {
	var newarr = []
	arr.forEach(t=>{
		if(Array.isArray(t)){
			newarr.push(...t)
		}else{
			newarr.push(t)
		}
	})
	return newarr
}
log(flatten([1, [2, [3, [4]], 5]]))


// 看源码
function __flatten(array) {
	// 判断长度返回空数组还是处理过的数组
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, 1) : []
}

function baseFlatten(array, depth, predicate, isStrict, result) {
  predicate || (predicate = isFlattenable)
  result || (result = [])

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        result.push(...value)
      }
    } else if (!isStrict) {
      result[result.length] = value
    }
  }
  return result
}

 /*
 * 总结
 * 1. 参数默认值代替函数体内做判断
 * 2. 获取长度要判断null值
 * 3. 返回数组的时候要懒得length，没有的话要返回空数组
 */