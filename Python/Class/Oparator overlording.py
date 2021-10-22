class Car:
	def __init__(self,brand,price,weight):
		self.brand = brand
		self.price = price
		self.weight = weight
	def __add__(self,other):
		return Car("Nothing",self.price+other.price,self.weight+other.weight)
		
car1 = Car("Toyota",135000,1230)
car2 = Car("BMW",120000,1160)

result = car1+car2

print("Price sum = {0}".format(result.price))
print("Wight sum = {0}".format(result.weight))