mass1 = float(input("First mass/-"))
mass2 = float(input("Second mass/-"))

r = float(input("Distance between the object/-"))

G = 6.673*(10**-11)
force = (G*mass1*mass2)/(r**2)

print("The gravitational force is {0} N".format(force))