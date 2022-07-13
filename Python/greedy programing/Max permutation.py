def maxPermu(arr,r):
	i = 0
	for n in range(r):
		max = arr[i]
		maxindex = i
		for j in range(len(arr)):
			if arr[j] > max and j > i:
				max = arr[j]
				maxindex = j
				
		arr[i], arr[maxindex] = arr[maxindex], arr[i]
		i+=1
		
	print(arr)

maxPermu([3,2,4,1,5],3)