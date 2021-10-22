import threading as t
def print1(name):
   for i in range(20):
	   print("Thread {0}".format(name))

t1 = t.Thread(target = print1,args = (1,))
t2 = t.Thread(target = print1,args = (2,))
t1.start()
t2.start()