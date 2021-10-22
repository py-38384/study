def decor(func):
	def dec():
		print("============")
		func()
		print("============")
	return dec
def welcome():
	print("Hallo world")
def hi():
	print("Hi I am Piyal")
decorated = decor(welcome)
hiplus = decor(hi)
decorated()
hiplus()
@decor
def print_text():
	print("Hallo Python")
print_text()