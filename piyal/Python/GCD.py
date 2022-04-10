def compute_gcd(x, y):
    smaller = min(x,y)
    gcd = 1
    for i in range(1, smaller+1):
        if((x % i == 0) and (y % i == 0)):
            gcd = i
    return gcd

num1 = int(input("Enter first number/-"))
num2 = int(input("Enter second number/-"))

gcd = compute_gcd(num1, num2)

print("GCD of", num1,"and", num2,"is", gcd)