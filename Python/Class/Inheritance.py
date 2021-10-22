class Animal:
	def __init__(self,name,color):
		self.name = name
		self.color = color
		
class Dog(Animal):
	def bark(self):
		print("Woof")
	
class Cat(Animal):
	def mau(self):
		print("Meuuu")

tom = Cat("Tom","navyblu")
bob = Dog("Bob","brown")
oggy = Cat("Oggy","liteblu")
print(oggy.name)
oggy.mau()
print(bob.name)
bob.bark()
