def candy(arr):
	uarr = list(set(arr))
	uarr.sort()
	low, high, result, count= uarr[0], uarr[-1], [0]*len(arr), 1
	for i in uarr:
		for j in range(len(arr)):
			if arr[j] == i:
				result[j] = count
		count+=1
	return result

print(candy([500,40000000,400,1]))