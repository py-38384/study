class Class:
	def __init__(self,num1,num2):
		self.num1 = num1
		self.num2 = num2
	def add(self):
		return self.num1+self.num2
	@classmethod
	def new_C(cls,num,num2):
		return cls(num,num2)
obj1 = Class.new_C(25,56)
obj2 = Class(20,30)
print(obj1.add())
print(obj2.add())