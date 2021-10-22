class exam:
	def __init__(self,name):
		self.name = name
		self.lis = []
	def add(self,other):
		self.lis.append(other)
	def display(self):
		i = 0
		while i < len(self.lis):
			print(self.lis[i].name)
			i+=1

obj1 = exam('A')
obj2 = exam('B')
obj3 = exam('C')
obj4 = exam('D')
obj5 = exam('E')

obj1.add(obj2)
obj1.add(obj3)
obj1.add(obj4)
obj1.add(obj5)

obj1.display()