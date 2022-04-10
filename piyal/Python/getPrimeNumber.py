def is_prime(num):
	for i in range(2,num):
		if num%i == 0:
			return True
		
num = int(input("Enter a number/-"))

check_prime = is_prime(num)

if check_prime:
	print("Number is not prime")
else:
	print("Number is prime")