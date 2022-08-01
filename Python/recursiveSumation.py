def recursiveSumation(num):
	if num <= 1:
		return 1
	return num + recursiveSumation(num-1)

print(recursiveSumation(100))