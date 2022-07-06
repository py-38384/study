num = int(input("Enter the number/-"))
result = num
for i in range(num-1):
	result = result * (num-(i+1))
	if num == 1:
		break
print(result)