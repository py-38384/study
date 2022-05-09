import bisect as b

lis = [35,84,24,97,43,98,65,23] #unsorted list
lis.sort() #list sorting
print(b.bisect(lis,50)) #item position in sorted list 
b.insort(lis,50) #item inserting
print(lis) #printing list