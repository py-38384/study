class Animal:
	def __init__(self,name,age):
		 self.name = name
		 self.age = age
	def eat(self):
		print("Animal need food.")
	def sound(self):
		print("Animal can make sound.")

class Human(Animal):
	def eat(self):
		print("{0} need to cook before eat".format(self.name))
	def sound(self):
		print("Human can talk.")
	def hi(self):
		print("Hi My name is {0}".format(self.name))
	
class Cat(Animal):
	def __init__(self,name):
		self.name = name
	def sound(self):
		super().sound()
		print("{0} can make sound like meeaauuuuoo.".format(self.name))

piyal = Human("Piyal",19)
oggy = Cat("Oggy")
piyal.eat()
piyal.hi()
oggy.sound()