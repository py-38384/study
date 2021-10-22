def check_armstrong(num):
	sum = 0
	power = len(num)
	for i in num:
		sum+=(int(i)**power)
	if sum == int(num):
		return True
	return False

num = input("Enter a number/-")
if check_armstrong(num):
	print("Number is Armstrong")
else:
	print("Number is not Armstrong")