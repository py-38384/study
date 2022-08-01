arrSum = 0
class Node:
	def __init__(self,data):
		self.data = data
		self.next = None

def printNode(head):
		if head == None : return
		print(head.data)
		printNode(head.next)

def sumArr(head):
	if head == None : return 0
	return head.data + sumArr(head.next) 

def findData(head, data):
	if head == None : return False
	if head.data == data : return True
	return findData(head.next, data)

def geNode(head, index):
	currentIndex = 0
	while currentIndex < index:
		if head == None:
			return
		currentIndex+=1
		head = head.next
	return head.data
	
def getNode(head, index):
	if head == None : return None 
	if index == 0 : return head.data
	index = index-1
	return getNode(head.next, index)
	
def revereList(head):
	prev = None
	while head != None:
		next = head.next
		head.next = prev
		prev = head
		head = next
	return prev

def reverseList(head, prev = None):
	if head == None : return prev
	next = head.next
	head.next = prev
	return reverseList(next, head)

def zipperList(head1,head2):
	head = head1
	tail = head
	count = 1
	head1 = head1.next
	while True:
		if head1 == None:
			tail.next = head2
			break
		if head2 == None:
			tail.next = head1
			break
		if count % 2 == 0:
			tail.next = head1
			tail = head1
			head1 = head1.next
			count+=1
		else:
			tail.next = head2
			tail = head2
			head2 = head2.next
			count+=1
			
	return head
	
	
a = Node(12)
b = Node(3)
c = Node(5)
d = Node(7)
e = Node(9)

a.next = b
b.next = c
c.next = d
d.next = e

f = Node(10)
g = Node(6)

f.next = g

printNode(a)
#e = reverseList(a)

e = zipperList(a,f)
print()
printNode(e)