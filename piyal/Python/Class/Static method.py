class Class:
	@staticmethod
	def add(num1,num2):
		return num1+num2

obj = Class()
print(Class.add(10,20))
print(obj.add(30,20))