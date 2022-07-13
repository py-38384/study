def highestProduct(arr):
	arr.sort()
	hi3 = arr[-1]*arr[-2]*arr[-3]
	h1l2 = arr[0]*arr[1]*arr[-1]
	return max(hi3,h1l2)

print(highestProduct([-5,-2,-1,0,0,1,1,5]))