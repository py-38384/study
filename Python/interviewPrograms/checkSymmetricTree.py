class Node:
	def __init__(self,value):
		self.value = value
		self.left = None
		self.right = None
def areSymmetric(root1,root2):
	if root1 == None and root2 == None:
		return True
	elif root1 == None and not root2 == None:
		return False
	elif not root1 == None and root2 == None:
		return False
	elif not root1.value == root2.value:
		return False
	else:
		if areSymmetric(root1.left,root2.right) and areSymmetric(root1.right,root2.left):
			return True
		else:
			return False
def checkSymmetric(root):
	if root == None : return True
	return areSymmetric(root.left,root.right)
	
A = Node(10)
B = Node(20)
C = Node(20)
D = Node(15)
E = Node(50)
F = Node(15)
G = Node(50)
H = Node(30)
I = Node(30)

A.left = B
A.right = C

B.left = D
B.right = E

C.right = F
C.left = G

E.left = H
G.right = I
'''
 Binary Tree
             A
          /     \
        B        C
       /  \     /   \
     D     E G     F
     	  /	 \
     	H		I
'''
'''
 Binary Tree
              10
           /        \
        20    	  20
       /  \    	 /   \
     15  50   50  15
      	  /  	 \
         30		30
'''
print(checkSymmetric(None))