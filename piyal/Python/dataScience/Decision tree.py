from sklearn.tree import DecisionTreeClassifier
import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix as cm
from sklearn.model_selection import train_test_split as tts
model = DecisionTreeClassifier()
df = pd.read_csv("/storage/emulated/0/titanic.csv")
df['male'] = df['Sex'] == "male"
xmean = df[['Pclass','male','Age','Siblings/Spouses','Parents/Children','Fare']]
ymean = df['Survived']
x_train,x_test,y_train,y_test = tts(xmean,ymean)#use random_state = (a number) for fixed split
model.fit(x_train,y_train)
y_pred = model.predict(x_test)
print(y_pred)
print(cm(y_test,y_pred))
print("Random prediction = {0}".format(model.predict([[3,15,0.3,0,2,40]])))
print(model.score(x_test,y_test))