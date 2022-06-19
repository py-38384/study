try:
	num1 = 5
	name = "Piyal"
	result = num1+name
	print("Result = "+str(result))
except TypeError:
	print("An error occurred")
finally:
	print("This code will execute no matter what happend")