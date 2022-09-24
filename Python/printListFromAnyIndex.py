lis = [10,20,30,40,50,60,70,80,90,100]
print(lis)
i = 3
n = i-1
started = False
print('[',end='')
while not i == n or not started:
	started = True
	print(lis[i],end=', ')
	i=(i+1)%len(lis) 
print('{0}]'.format(lis[i]),end='')