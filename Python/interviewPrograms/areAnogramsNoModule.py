def are_anograms(str1,str2):
	if len(str1) != len(str2):
		return False
		
	dic1 = {}
	dic2 = {}
	
	for ch1 in str1:
		if ch1 in dic1.keys():
			dic1[ch1] += 1
		else:
			dic1[ch1] = 1
			
	for ch2 in str2:
		if ch2 in dic2.keys():
			dic2[ch2] += 1
		else:
			dic2[ch2] = 1
	
	#print(dic1)
	#print(dic2)
	
	for key in dic1.keys():
		if key not in dic2.keys() or dic1[key] != dic2[key]:
			return False
	return True
	
	
print(are_anograms('denger','gerden'))