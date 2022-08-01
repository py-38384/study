n = int(input('Enter the Range number:'))
print('All prime number till the range/_')
for i in range(3,n):
	result = True
	for j in range(2,i):
		if i % j == 0:
			result = False
	if result:
		print(i)