def compare2Str(str1,str2):
	dic = {}
	for c in str1:
		if c in dic.keys():
			dic[c] += 1
		else:
			dic[c] = 1
	for c in str2:
		if c in dic.keys():
			dic[c] -= 1
			if dic[c] <= -1:
				return False
		else:
			return False
	return True
	
str1 = input('Enter string 1/-')
str2 = input('Enter string 2/-')
if compare2Str(str1,str2):
	print('Match')
else:
	print('Dismatch')