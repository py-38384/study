def first_and_last(arraylist,terget):
	for i in range(len(arraylist)):
		if arraylist[i] == terget:
			start = i
			while (i+1) < len(arraylist) and arraylist[i+1] == terget:
				i+=1
			return [start,i]
	return [-1,-1]

print(first_and_last([3,5,6,12,15,15,15,15,20,55,60],15))
print(first_and_last([],0))