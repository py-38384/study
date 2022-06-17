lis = [36,87,32,6,8,87]
num = 6
if num in lis:
	index = lis.index(num)
	print('index of {0} is {1}'.format(num,index))
else:
	print('{0} is not in list'.format(num))