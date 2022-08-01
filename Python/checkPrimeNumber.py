num = int(input('Enter the number/-'))
if num <= 1:
	print('Enter a valid number')
elif num == 2:
	print('Number is prime')
else:
	i = 2
	result = True
	while i < num:
		if num % i == 0:
			result = False
		i+=1
	if result:
		print('Number is prime')
	else:
		print('Number is not prime')