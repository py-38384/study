class Node:
	def __init__(self,data):
		self.data = data
		self.next = None
	def __repr__(self):
		return '<Node Object> node data = {0}'.format(self.data)
	
obj = Node(30)
print(obj)