def isPalindrom(str):
	if len(str) == 0 or len(str) == 1:
		return True
	if str[0] == str[-1]:
		return isPalindrom(str[1:-1])
	return False

print(isPalindrom('racecar'))