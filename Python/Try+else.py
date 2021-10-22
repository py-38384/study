try:
	num = 15/5
	print(num)
except ZeroDivisionError:
	print("Atempt to divide by zero")
else:
	print("Error not found")
try:
	num = 15/0
	print(num)
except ZeroDivisionError:
	print("Atempt to divide by zero")
else:
	print("Error not found")