def Numbers():
	num = 0
	while num <= 100:
		yield num
		num += 5

List = list(Numbers())
print(List)