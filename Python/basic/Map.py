def Double(num):
	result = num*num
	return result
List = [24,76,32,50,21,17,14,31,33,26]
result1 = list(map(Double,List))
print(result1)
result2 = list(map(lambda x:x+x,List))
print(result2)