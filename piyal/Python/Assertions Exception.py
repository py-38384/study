try: 
 temp = -1
#raise TypeError
 assert (temp <= 0), "Not suitable"
 assert(temp >= 100)
except TypeError:
   print("Error occurred")
except AssertionError:
   print("Error")