def maxRoomReq(arr):
	nums = []
	for i,j in arr:
		nums.append((i,+1))
		nums.append((j,-1))
	nums.sort()
	curr = 0
	ans = 0
	for _,n in nums:
		curr+=n
		ans = max(ans,curr)
	return ans

print(maxRoomReq([[0,12],[4,8],[12,15],[20,30],[1,3],[0,3]]))