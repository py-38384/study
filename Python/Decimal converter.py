def binary_to_decimal(binary):
	decimal = 0
	i = 0
	while(binary != 0):
		last_digit = binary%10
		curr_decimal = last_digit *pow(2,i)
		decimal += curr_decimal
		binary = binary//10
		i += 1
	return decimal
	
num = int(input("Enter a binary number/-"))
decimal = binary_to_decimal(num)
print("Decimal = {0}".format(decimal))