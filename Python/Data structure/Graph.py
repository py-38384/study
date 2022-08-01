def dfti(data,seed):
	stack = [ seed ]
	while len(stack) > 0:
		current = stack.pop()
		print(current)
		for i in data[current]:
			stack.append(i)

def dftr(data,current):
	print(current)
	for i in data[current]:
		dftr(data,i)
		
def bft(data,seed):
	queue = [ seed ]
	while len(queue) > 0:
		current = queue.pop()
		print(current)
		for i in data[current]:
			queue.insert(0,i)
		
def hasPath(data,curr,dest):
	if curr == dest : return True
	for i in data[curr]:
		if hasPath(data,i,dest) : return True
	return False
	
def bftHasPath(data,curr,dest):
	queue = [ curr ]
	while len(queue) > 0:
		current = queue.pop()
		if current == dest : return True
		for i in data[current]:
			queue.insert(0,i)
	return False

def undirectedPath(edegs,nodeA,nodeB):
		graph = getAG(edegs)
		return unDirCheckPath(graph, nodeA, nodeB, set())

def unDirCheckPath(graph, curr, dest, visited):
		if curr == dest : return True
		if curr in visited : return False
		visited.add(curr)
		for i in graph[curr]:
			if unDirCheckPath(graph, i, dest, visited) : return True
		return False
		
def getAG(edges):
	graph = {}
	for edge in edges:
		a, b = edge[0], edge[1]
		if a not in graph : graph[a] = []
		if b not in graph : graph[b] = []
		graph[a].append(b)
		graph[b].append(a)
	return graph
	
def printG(graph):
	print('[\n')
	for key, value in graph.items():
		print(' {0} => {1}'.format(key,value))
	print('\n]\n')

graph1 = {
	'a':['b','c'],
	'b':['d'],
	'c':['e'],
	'd':['f'],
	'e':[],
	'f':[]
}

graph2 = {
	'a':['c','f'],
	'g':[],
	'c':['e','d','g'],
	'd':[],
	'e':[],
	'f':[]
}

edges = [
['A','B'],
['C','A'],
['B','D'],
['D','A'],
['C','D'],
['F','G']
]

"""
print('Depth first traversal iteretive')
dfti(graph1,'a')
print('Depth first traversal recursive')
dftr(graph1,'a')
print('Bread first traversal iteretive')
bft(graph1,'a')
print('Has path to node x to node y')
print(hasPath(graph2,'g','a'))
print('Bread First Has path to node x to node y')
print(bftHasPath(graph2,'c','g'))
graph = getAG(edges)
printG(graph)
printG(graph1)
printG(graph2)
"""
print(undirectedPath(edges,'G','F'))