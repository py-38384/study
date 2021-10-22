Set1 = {34,76,32,98,32,76,40,10}
Set2 = {20,63,63,70,70,10,34,32}
Set1.add(100)
print(Set1)
Set1.remove(98)
print(Set1)
num = int(input("Enter a number/-"))
Set1.add(num)
print(Set1)
print("Length = {0}".format(len(Set1)))
print(Set1 | Set2)
print(Set1 & Set2)
print(Set1 - Set2)
print(Set1 ^ Set2)