class Node:
	next = []
	def __init__(self,name = None):
		self.name = name
		if not name == None:
			Node.next.append(self)
		self.edge = []
	def node_edge(self,other):
		self.edge.append(other)
	def display(self):
		i = 0
		while i < len(self.edge):
			print('{0} => {1} '.format(self.name,self.edge[i].name),end = '')
			i+=1
		if i == 0:
			print(self.name)
		if not i == 0:
			print()

def show():
	i = 0
	while i <  len(Node.next):
		Node.next[i].display()
		i+=1
objlist = []

def decor(value):
	print("-----------------------")
	print(value)
	print("-----------------------")
i = 0
while True:
	print("_ _ _ _ _ Enter_ _ _ _ _")
	print("1 for create node")
	print("2 for create edge")
	print("3 for display Graph")
	print("Any for close the program")
	choice = int(input())
	if choice == 1:
		name = input("Enter node name/-")
		objlist.append(Node(name))
		decor("{0} node insertation complete".format(name))
		i+=1
	elif choice == 2:
		obj1 = Node()
		obj2 = Node()
		j = 0
		flag = False
		name = input("Enter the node name/-")
		terget = input("Enter the terget node name/-")
		while j < len(objlist):
			if objlist[j].name == name:
				obj1 = objlist[j]
				flag = True
			if objlist[j].name == terget:
				obj2 = objlist[j]
				flag = True
			j+=1
			
		if flag:
			obj1.node_edge(obj2)
			decor("{0} to {1} Edge complete".format(name,terget))
		else:
			decor("Error! node not found")
	elif choice == 3:
		print("---------")
		show()
	else:
		break