import time
hour = int(input("Enter the hour:"))
minute = int(input("Enter the minute:"))
second = int(input("T current second:"))

def display():
	print('{0}:{1}:{2}'.format(hour,minute,second))
	
def add():
	global hour
	global minute
	global second
	
	second = second + 1
	
	if second == 60:
		minute = minute + 1
		second = 0
	if minute == 60:
		hour = hour + 1
		minute = 0
	if hour == 24:
		hour = 0
	print('\033[H\033[2J',end = '')

while True:
	time.sleep(1)
	add()
	display()