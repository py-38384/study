class Node:
	next = []
	def __init__(self,name = None):
		self.name = name
		Node.next.append(self)
		self.edge = []
	def node_edge(self,other):
		self.edge.append(other)
	def display(self):
		i = 0
		while i < len(self.edge):
			print("{0} => {1}".format(self.name,self.edge[i].name),end = ' ')
			i+=1
		if i == 0:
			print(self.name)
		print()
		
def show():
		i = 0
		while i < len(Node.next):
			Node.next[i].display()
			i+=1
		
a = Node('A')
b = Node('B')
c = Node('C')
d = Node('D')
e = Node('E')

a.node_edge(b)
a.node_edge(c)

b.node_edge(d)
b.node_edge(e)

c.node_edge(d)

d.node_edge(a)
d.node_edge(d)
d.node_edge(e)

show()