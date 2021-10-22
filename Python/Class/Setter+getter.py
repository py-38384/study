class Person:
	def __init__(self,name):
		self.__name = name
		
	@property
	def name(self):
		print("getter invoked")
		return self.__name
	
	@name.setter
	def name(self,value):
		print("setter invoked")
		self.__name = value

piyal = Person("Piyal")
print(piyal.name)
piyal.name = "Mursalin"
print(piyal.name)