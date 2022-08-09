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

class graphClass:
	def __init__(self):
		self.visited = []
	def connectedComponentCount(self,graph):
		self.visited = []
		nodes = []
		result = 0
		for i in graph.keys():
			nodes.append(i)
		for node in nodes:
			 if self.visitNode(graph,node) : result+=1
		return result
	def visitNode(self,graph,node):
		if node in self.visited : return False
		self.visited.append(node)
		for node in graph[node]:
			self.visitNode(graph,node)
		return True
		
def connectedComponentCount(graph):
		visited = set()
		nodes = []
		result = 0
		for i in graph.keys():
			nodes.append(i)
		for node in nodes:
			 if visitNode(graph,node,visited) : result+=1
		return result
	
def visitNode(graph,node,visited):
		if node in visited : return False
		visited.add(node)
		for node in graph[node]:
			visitNode(graph,node,visited)
		return True
		
def largestComponent(graph):
		visited = set()
		point = 0
		nodes = []
		for i in graph.keys():
			nodes.append(i)
		for node in nodes:
			returnPoint = componentPoint(graph,node,visited)
			if point < returnPoint:
				point = returnPoint
		return point
	
def componentPoint(graph,node,visited):
		if node in visited : return 0
		visited.add(node)
		j = 1
		for node in graph[node]:
			j+=componentPoint(graph,node,visited)
		return j

def shortestPath(edges,curr,dest):
	graph = getAG(edges)
	if curr == dest : return 0
	distence = 0
	visited = set()
	queue = [ [curr,distence] ]
	while len(queue) > 0:
		current = queue.pop()
		if current[0] in visited : continue
		visited.add(current[0])
		if current[0] == dest : return current[1]
		for node in graph[current[0]]:
			queue.insert(0,[node,current[1]+1])
	return False

def islandCount(grid):
	visited = set()
	count = 0
	for i in range(len(grid)):
		for j in range(len(grid[0])):
			if explore(grid,i,j,visited) : count+=1
	return count

def explore(grid,i,j,visited):
	if i >= len(grid) or i < 0 or j >= len(grid[0]) or j < 0: return False
	if grid[i][j] == 'W' : return False
	currPosition = "{0},{1}".format(i,j)
	if currPosition in visited : return False
	visited.add(currPosition)
	explore(grid,i-1,j,visited)
	explore(grid,i+1,j,visited)
	explore(grid,i,j-1,visited)
	explore(grid,i,j+1,visited)
	return True
	
def largestIsland(grid):
	visited = set()
	largest = 0
	for i in range(len(grid)):
		for j in range(len(grid[0])):
			returnValue = exploreLand(grid,i,j,visited)
			if returnValue > largest : largest = returnValue
	return largest

def exploreLand(grid,i,j,visited):
	if i >= len(grid) or i < 0 or j >= len(grid[0]) or j < 0: return 0
	if grid[i][j] == 'W' : return 0
	currPosition = "{0},{1}".format(i,j)
	if currPosition in visited : return 0
	visited.add(currPosition)
	return 1 + exploreLand(grid,i-1,j,visited) + exploreLand(grid,i+1,j,visited) + exploreLand(grid,i,j-1,visited) + exploreLand(grid,i,j+1,visited)
	

graph1 = {
	'a':['b','c'],
	'b':['d'],
	'c':['e'],
	'd':['f'],
	'e':[],
	'f':[]
}

graph2 = {
	'a':['g','c'],
	'g':[],
	'c':['a'],
	'd':[],
	'e':[],
	'f':[]
}

graph3 = {
	'3':[],
	'4':['6'],
	'6':['4','5','7','8'],
	'8':['6'],
	'7':['6'],
	'5':['6'],
	'1':['2'],
	'2':['1']
}

graph4 = {
	'0':['8','1','5'],
	'1':['0'],
	'5':['0','8'],
	'8':['0','5'],
	'2':['3','4'],
	'3':['2','4'],
	'4':['3','2']
	
}

edges1 = [
	['A','B'],
	['C','A'],
	['B','D'],
	['D','A'],
	['C','D'],
	['F','G']
]

edges2 = [
	['W','X'],
	['X','Y'],
	['Z','Y'],
	['Z','V'],
	['W','V']
]

grid1 = [
		['W', 'L', 'W', 'W', 'W'],
		['W', 'L', 'W', 'W', 'W'],
		['W','W','W',  'L',  'W'],
		['W', 'W', 'L',  'L',  'W'],
		['L',  'W', 'W',  'L',   'L'],
		['L',  'L',  'W',  'W','W'],
]
grid2 = [
		['W', 'W', 'W', 'W', 'W'],
		['W', 'W', 'W', 'W', 'W'],
		['W','W','W',  'W',  'W'],
		['W', 'W', 'W',  'W',  'W'],
		['W',  'W', 'W',  'W', 'W'],
		['W',  'W',  'W',  'W','W'],
]
grid3 = [
		['W', 'L', 'W', 'W', 'W'],
		['W', 'W', 'W', 'W', 'W'],
		['W','W','L',  'L',  'W'],
		['W', 'L', 'L',  'W',  'W'],
		['L',  'W', 'W',  'L',   'L'],
		['L',  'L',  'W',  'W','W'],
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
print(undirectedPath(edges,'G','F'))
graphObj = graphClass()
print(graphObj.connectedComponentCount(graph2))
print(shortestPath(edges2,'W','Z'))
"""
print(islandCount(grid1))
print(largestIsland(grid1))