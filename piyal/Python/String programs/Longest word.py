txt = input()
lis = txt.split()
long = lis[0]
for i in lis:
  if len(long) < len(i):
  	long = i

print(long)