class Human:
	def __init__(self,name,age):
		self.name = name
		self.age = age
	def sayhi(self):
		print("Hi my name is {0}".format(self.name))
		
piyal = Human("Piyal",19)
rakib = Human("Rakib",18)
print(piyal.name)
piyal.sayhi()
rakib.sayhi()