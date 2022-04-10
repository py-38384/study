str = input("Input a word:")
rev_str = str[::-1]
if str == rev_str:
	print("Word is Palindroma")
else:
	print("Word is not Palindroma")