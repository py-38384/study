def checkPath(gas,cost,start):
	i = start
	n = len(gas)
	started = False
	remaining = 0
	while not i == start or not started:
		started = True
		remaining+=gas[i]-cost[i]
		if remaining < 0 : return i
		i = (i+1)%n
	return -1
def canStation(gas,cost):
	i = 0
	j = 0
	while i < len(gas):
		j = i
		result = checkPath(gas,cost,i)
		if result == -1:
			return i
		else:
			i=result+1
		if i < j : return -1
	return -1
	
gasStations = {
		'gas' : [1,5,3,3,5,3,1,3,4,5],
		'cost' : [5,2,2,7,2,4,2,5,1,2]
}

print(canStation(gasStations['gas'],gasStations['cost']))