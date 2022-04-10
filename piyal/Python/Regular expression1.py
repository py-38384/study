import re

num = "03760995490589339"
pattern = r"9"
num = re.sub(pattern,"0",num)
print(num)