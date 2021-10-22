import pandas as pd
import numpy as np
data = np.array([24,75,86,86,'piyal','Noone'],str)
series = pd.Series(data,index = ['A','B','C','D','E','F'])
print(series)