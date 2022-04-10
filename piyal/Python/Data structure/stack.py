lis = []
def push():
	data = input("Enter the data/-")
	lis.append(data)
	print("{0} pushed successfully".format(data))
def display():
	indx = len(lis)-1
	while(indx >= 0):
		print(lis[indx])
		indx-=1

while True:
	print("_ _ _ _Enter_ _ _ _")
	print("1 for push")
	print("2 for pop")
	print("3 for peek")
	print("4 for show stack")
	print("any for terminate whole program")
	choice = int(input())
	if choice == 1:
		push()
	elif choice == 2:
		num = lis.pop()
		print("{0} poped".format(num))
	elif choice == 3:
		print(lis[-1])
	elif choice == 4:
		display()
	else:
		break