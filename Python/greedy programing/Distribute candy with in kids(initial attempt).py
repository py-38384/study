def candy(arr):
	low = min(arr)
	high = max(arr)
	result = [0]*len(arr)
	count = 1
	for i in range((max(arr)+1)):
		try:
			arr.index(i)
			for j in range(len(arr)):
				if arr[j] == i:
					result[j] = count
			count+=1
		except:
			pass
	return result

print(candy([500,40000000,400,1]))