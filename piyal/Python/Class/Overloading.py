class sumSuper:
	def add(self,num1,num2):
		return num1+num2
	
class sumDrived(sumSuper):
	def add(self,num1,num2,num3):
		return num1+num2+num3
		
obj1 = sumSuper()
obj2 = sumDrived()

print("Sum from super = {0}".format(obj1.add(10,20)))
print("Sum from drived = {0}".format(obj2.add(10,20,30)))