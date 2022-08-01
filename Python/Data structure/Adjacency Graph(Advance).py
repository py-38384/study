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
	def checkPath(self,other,visited = []):
		if self.name == other.name : return True
		if self in visited : return False
		visited.append(self)
		for i in self.edge:
			if i.checkPath(other,visited) : return True
		return False

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
	print("4 for check path")
	print("Any for close the program")
	choice = int(input())
	if choice == 1:
		name = input("Enter node name or value/-")
		objlist.append(Node(name))
		decor("{0} node insertation complete".format(name))
		i+=1
	elif choice == 2:
		obj1 = Node()
		obj2 = Node()
		j = 0
		flag1 = False
		flag2 = False
		name = input("Enter the node name/-")
		terget = input("Enter the terget node name/-")
		while j < len(objlist):
			if objlist[j].name == name:
				obj1 = objlist[j]
				flag1 = True
			if objlist[j].name == terget:
				obj2 = objlist[j]
				flag2 = True
			j+=1
			
		if flag1 and flag2:
			obj1.node_edge(obj2)
			decor("{0} to {1} Edge complete".format(name,terget))
		elif flag1 and not flag2:
			decor("Node1 found but Node2 not found")
		elif not flag1 and flag2:
			decor("Node2 found but Node1 not found")
		else:
			decor("Error! node not found")
	elif choice == 3:
		print("---------")
		show()
	elif choice == 4:
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
			result = obj1.checkPath(obj2)
			if result:
				decor('Path node {0} to node {1} exist..'.format(obj1.name,obj2.name))
			else:
				decor('Path node {0} to node {1} not exist..'.format(obj1.name,obj2.name))
		else:
			decor("Error! node not found")
	else:
		print('Program terminated!!!...')
		break