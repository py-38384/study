def fact(num):
	if num == 1:
		return num
	return num * fact(num-1)
print("Factorial  = ",fact(int(input("Enter a number/-"))))