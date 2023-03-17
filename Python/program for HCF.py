factorArrayAll = []
numberOfElement = int(input("How many numbers/-"))
for i in range(numberOfElement):
	factorArray = []
	number = int(input("Enter number{0}/-".format(i+1)))
	i = 2
	while i <= number/2:
		if number%i == 0:
			factorArray.append(i)
		i+=1
	factorArrayAll.extend(factorArray)
maximum = max(factorArrayAll)
HCF = 1
while maximum>0:
	if factorArrayAll.count(maximum) == numberOfElement:
		HCF = maximum
		break
	maximum-=1
print("Highest common factor {0}".format(HCF))