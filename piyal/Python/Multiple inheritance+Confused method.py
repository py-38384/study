class A:
	def __init__(self,id):
		self.id = id
	
	def add(self,num):
		return num+5
	
class B:
	def __init__(self,id,n):
		self.id = id
		self.n = n
	
	def add(self,num):
		return num+10
		
	def mult(self,num):
		return num * 5

class C(A,B):
	def __init__(self,num):
		self.num = num

obj = C(10)
print(obj.add(10))
print(obj.mult(10))