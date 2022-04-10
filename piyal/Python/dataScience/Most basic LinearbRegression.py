import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# generate random data-set
x = np.array([1,3,7,10,11,13])
y = np.array([5,15,35,50,55,65])
v = np.array([4,5,12,14,11,15])

x = np.array(x).reshape(-1,1)
y = np.array(y).reshape(-1,1)
v = np.array(v).reshape(-1,1)

# Model initialization
regression_model = LinearRegression()
# Fit the data(train the model)
regression_model.fit(x, y)
# Predict
y_predicted = regression_model.predict(v)
rmse = mean_squared_error(y, y_predicted)
r2 = r2_score(y, y_predicted)

#printing values
print('Slope:' ,regression_model.coef_)
print('Intercept:', regression_model.intercept_)
print('Root mean squared error: ', rmse)
print('R2 score: ', r2)
print(y_predicted)