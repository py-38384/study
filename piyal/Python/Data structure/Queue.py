lis = []
while True:
	print("_ _ _ _Enter_ _ _ _")
	print("1 for Enqueue")
	print("2 for Dequeue")
	print("3 for Display")
	print("any for Terminate whole program")
	choice = int(input())
	
	if choice == 1:
		data = input("Enter your data/-")
		lis.insert(0,data)
	elif choice == 2:
		data = lis.pop()
		print("{0} Dequeued".format(data))
	elif choice == 3:
		for i in lis:
			print(i)
	else:
		break