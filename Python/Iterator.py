class Data: 
    def __init__(self,start,limit):
        self.value=start
        self.limit=limit
    def __iter__(self):
        return self
        
    def __next__(self):
        x = self.value
        if x > self.limit:
            raise StopIteration
        else: 
            self.value = x+1
            return x

for i in Data(10,100):
    print(i)