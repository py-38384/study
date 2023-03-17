numbers = []
numberOfElement = int(input("How many numbers/-"))
for i in range(numberOfElement):
	numbers.append(int(input("Enter number{0}/-".format(i+1))))
flag = False
i = 1
while True:
	LCM = numbers[0]*i
	for j in range(1,numberOfElement):
		if LCM%numbers[j] == 0 and len(numbers) == j+1:
			flag = True
		elif LCM%numbers[j] == 0:
			continue
		else:
			break
	if flag : break
	i+=1
print("Lowest common multiple {0}".format(LCM))