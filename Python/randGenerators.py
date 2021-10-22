import random

def Data(num):
    i = 0
    while i < num:
         number = random.randint(0,100)
         yield number
         i+=1 
        
for c in Data(10):
	print(c)