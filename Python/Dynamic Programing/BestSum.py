def bestSum(num,numArray):
	arraylist = [None] * (num+1)
	arraylist[0] = []
	for i in range(len(arraylist)):
		if arraylist[i] != None:
			for j in numArray:
				if (i+j) < len(arraylist):
					templist = arraylist[i] +[j]
					if arraylist[i+j] == None:
						arraylist[i+j] = templist
					else:
						if len(arraylist[i+j]) > len(templist):
							arraylist[i+j] = templist
					
	return arraylist[num]
	
	
print(bestSum(10,[5,6,3,8,7,2,4]))