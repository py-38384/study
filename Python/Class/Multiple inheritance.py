class First:
  def hi(self):
  	print("Hi")

class Second:
  def hallo(self):
  	print("Hallo")
  	
class Third(Second, First):
	def __init__(self):
		print("Object created")

obj = Third()
obj.hi()
obj.hallo()
