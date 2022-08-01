class Node:
	def __init__(self,data):
		self.data = data
		self.left = None
		self.right = None

#depth first traversal recursively
def dft(root):
	if root == None : return
	print(root.data,end=' ')
	dft(root.left)
	dft(root.right)
	
#depth first traversal iteratively
def dfti(root):
	stack = [root]
	while len(stack) > 0:
		node = stack.pop()
		print(node.data,end=' ')
		if node.right : stack.append(node.right)
		if node.left : stack.append(node.left)
		
def dftt(root):
	if root == None : return []
	return [root.data]+dftt(root.left)+dftt(root.right)
	
def bfti(root):
	queue = [ root ]
	while len(queue) > 0:
		node = queue.pop()
		print(node.data,end=' ')
		if node.left : queue.insert(0,(node.left))
		if node.right : queue.insert(0,(node.right))
		
def isIncludei(root,tergetData):
	stack = [root]
	while len(stack) > 0:
		node = stack.pop()
		if node.data == tergetData : return True
		if node.right : stack.append(node.right)
		if node.left : stack.append(node.left)
	return False
		
def isInclude(root,tergetData):
	if root == None : return False
	if root.data == tergetData : return True
	if isInclude(root.left,tergetData) or isInclude(root.right,tergetData) : return True
	else : return False

A = Node('A')
B = Node('B')
C = Node('C')
D = Node('D')
E = Node('E')
F = Node('F')

A.left = B
A.right = C

B.left = D
B.right = E

C.right = F

# Binary Tree
#             A
#          /     \
#        B      C
#       /  \        \
#     D     E       F

arrList1 = [10]
arrList2 = [23,64,1,7]
arrList = arrList1 + arrList2
arrList = dftt(A)
print(arrList)
dft(A)
print()
bfti(A)
print()
print(isInclude(A,'B'))