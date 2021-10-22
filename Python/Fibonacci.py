def fibonacci(num):
	fibo = [0,1]
	i = 2
	while i < num:
		next_fibo = fibo[-1] + fibo[-2]
		fibo.append(next_fibo)
		i+=1
	return fibo
num = int(input("Plz enter the number/-"))
fib_lis = fibonacci(num)
print("Fibonacci sequence/_ _ _")
for i in fib_lis:
	print(i)