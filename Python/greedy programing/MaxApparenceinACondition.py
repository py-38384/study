def getMaxApparence(arr):
	dic = {}
	for i in arr:
		if i in dic.keys():
			dic[i]+=1
		else:
			dic[i] = 1
	m = max(dic.values())
	length = (round(len(arr)))/2
	print(length,m)
	if length < m:
		for k, v in dic.items():
			if m == v:
				return k
	return 'not found'
	
print(getMaxApparence([2,2,4,3,3,3,3,3,3,3,3,2,2,4]))