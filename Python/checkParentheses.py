def checkParentheses(parentheses):
	diff = 0
	for i in parentheses:
		if i == '(':
			diff+=1
		else:
			if diff <= 0:
				return False
			else:
				diff-=1
	return diff==0
	
print(checkParentheses('(()(())(())'))