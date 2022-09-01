def nthLargest(arr,terget):
	tempArr = arr.copy()
	resultArr = list(set(tempArr))
	resultArr.sort()
	return resultArr[-terget]

print(nthLargest([34,65,22,4,8,5,88,88,19],4))