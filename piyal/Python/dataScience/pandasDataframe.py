import pandas as pd
data = {
    "TV": [25608, 20999, 18300, 19830, 15000],
    "Mobile": [14999, 17500, 18499, 20299, 15999],
    "Speakers": [1456, 1590, 1500, 1832, 1499],
    "Bike":[120000,128000,90000,85000,140000]
   
}
df= pd.DataFrame(data,index = ['Piyal','Rakib','Sujon','minarul','Koli'])
print(df,'\n')#use df.max()to get max
print(df.iloc[1:3],'\n')
print(df[['TV','Bike']],'\n')#use df.loc[index] to get the value
print(df.head(2),'\n')#use df.min() to get min
print(df.tail(2),'\n')#use df.info to get info
print(df.shape,'\n')#use df.mean() to get avarage
print(df.size,'\n')
print(df.median(),'\n')
print(df.loc['Piyal',['TV','Bike']])
print(df.describe(),'\n')
print(df.ndim)
df.drop("Piyal",axis = 0,inplace = True)#use colum name and axis = 1 to drop colum
print(df)