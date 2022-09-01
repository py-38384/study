class Node:
	def __init__(self,data):
		self.previous = None
		self.data = data
		self.next = None
	def __repr__(self):
		return '<Node Object> node data = {0}'.format(self.data)
	
class LinkedList:
	def __init__(self,dataList = []):
		self.head = None
		self.tail = None
		self.length = 0
		if len(dataList) > 0:
			for i in dataList:
				self.append(i)
	def __repr__(self):
		return '<List Object>'
	def append(self,data):
		dataObj = Node(data)
		dataObj.next = None
		self.length += 1
		if self.head == None:
			self.head = dataObj
			self.head.previous = None
		if self.tail == None : self.tail = dataObj
		else:
			self.tail.next = dataObj
			dataObj.previous = self.tail
			self.tail = dataObj
	def add(self,data):
		dataObj = Node(data)
		dataObj.previous = None
		self.length += 1
		if self.tail == None:
			self.tail = dataObj
			self.tail.next = None
		if self.head == None : self.head = dataObj
		else:
			self.head.previous = dataObj
			dataObj.next = self.head
			self.head = dataObj
	def insert(self,data,index):
		nodeObj = Node(data)
		pointer = self.head
		for i in range(index):
			pointer = pointer.next
		prev = pointer.previous
		prev.next = nodeObj
		nodeObj.next = pointer
		pointer.previous = nodeObj
	def print(self):
		pointer = self.head
		print('< ',end='')
		while not pointer.next == None:
			print(pointer.data,end=', ')
			pointer = pointer.next
		print(pointer.data,'>')
	def pop(self):
		if self.tail == None : return 'List is empty'
		data = self.tail.data
		self.tail = self.tail.previous
		self.tail.next = None
		self.length-=1
		return data
		

obj = LinkedList([46,'Piyal',32,99])
obj.append(20)
obj.append(40)
obj.append(10)
obj.append(80)
obj.add(60)
obj.insert(4,1)
obj.print()
print(obj.pop())
obj.print()