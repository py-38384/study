try:
   age = int(input("Enter you age:"))
   if age < 18:
       raise ValueError("Age is less than 18. Access restricted")
   else:
   	print("Welcome")
except ValueError as e:
    print(e)