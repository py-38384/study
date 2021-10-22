def Numbers():
	num = 1
	while num <= 100:
		yield num
		num += 1

List = list(Numbers())
print(List)