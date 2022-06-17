def nth_largest(arr,terget):
	arr.sort()
	return arr[-terget]

print(nth_largest([3,5,6,12,5,15,20,55,60],4))