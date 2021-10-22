class Class:
	def __init__(self,num1,num2):
		self.__num1 = num1
		self.num2 = num2
	def show(self):
		print(self.__num1)
obj = Class(20,10)
obj.show()
#Private value can be accessed like this
#object._Class__value