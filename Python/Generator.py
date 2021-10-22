def Numbers():
	num = 1
	while num <= 100:
		yield num
		num += 1

for num in Numbers():
	print(num)