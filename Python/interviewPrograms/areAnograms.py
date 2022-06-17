from collections import Counter as c
def are_anograms(str1,str2):
	if len(str1) != len(str2):
		return False
	return c(str1) == c(str2)
print(are_anograms('denger','gerden'))