class Node:
	def __init__(self,previous,data,next):
		self.previous = previous
		self.data = data
		self.next = next

class Linkedlist:
	def __init__(self,name):
		self.head = None
		self.tail = None
		self.name = name
		self.count = 0
	def add_at_front(self):
		data = input("Enter the data/-")
		if self.head == None:
			self.head = Node(None,data,self.head)
			self.tail = self.head
			self.count+=1
			print("{0} Insert successful...".format(data))
			return
		temp = self.head
		self.head = Node(None,data,self.head)
		temp.previous = self.head
		self.count+=1
		print("{0} Insert successful...".format(data))
	def add_at_end(self):
		data = input("Enter the data/-")
		if self.tail == None:
			self.tail = Node(self.tail,data,None)
			self.head = self.tail
			self.count+=1
			print("{0} Insert successful...".format(data))
			return
		temp = self.tail
		self.tail = Node(self.tail,data,None)
		temp.next = self.tail
		self.count+=1
		print("{0} Insert successful...".format(data))
	def traverse(self):
		if self.head == None:
			print("Empty list!")
			return
		temp = self.head
		print("{0} element are present in {1}___".format(self.count,self.name))
		print("--------------------------------")
		while temp.next != None:
			print(temp.data)
			temp = temp.next
		print(temp.data)
	def delete_from_front(self):
		if self.head == None:
			print("List is empty")
			return
		if self.head.next == None:
			data = self.head.data
			self.head = None
			self.tail = None
			self.count-=1
			print("{0} delete successful...".format(data))
			return
		data = self.head.data
		self.head = self.head.next
		self.head.previous = None
		self.count-=1
		print("{0} delete successful...".format(data))
	def delete_from_end(self):
		if self.tail == None:
			print("List is empty")
			return
		if self.tail.previous == None:
			data = self.data
			self.tail = None
			self.head = None
			self.count-=1
			print("{0} delete successful...".format(data))
			return
		data = self.tail.data
		self.tail = self.tail.previous
		self.tail.next = None
		self.count-=1
		print("{0} delete sucessful...".format(data))

choice = None
obj = Linkedlist("Defaultlist")
while True:
	print("_________Enter__________")
	print("1 for insert at front")
	print("2 for insert at end")
	print("3 for traverse")
	print("4 for delete at front")
	print("5 for delete at end")
	print("Any for terminate the program")
	choice = int(input())
	print("---------")
	if choice == 1:
		obj.add_at_front()
	elif choice == 2:
		obj.add_at_end()
	elif choice == 3:
		obj.traverse()
	elif choice == 4:
		obj.delete_from_front()
	elif choice == 5:
		obj.delete_from_end()
	else:
		break