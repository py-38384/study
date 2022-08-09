def binarySearch(arrList,n):
	first = 0
	last = len(arrList)-1
	mid = (first+last)//2
	while first <= last:
		if arrList[mid] == n : return mid
		elif arrList[mid] > n:
			last = mid-1 
			mid = (first+last) // 2
		else:
			first = mid+1
			mid = (first+last) // 2
	return -1
	
def varify(num):
	if num <= -1 : print('Number is not found')
	else : print('Number is found at index {} '.format(num))

lis = [3,6,7,10,13,27,30,31,38,40,44,47,49,50]
varify(binarySearch(lis,31))