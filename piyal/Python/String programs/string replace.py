import re

str1 = "my name is david.hi david"
pattern = r"david"

str2 = re.sub(pattern,"amy",str1)
print(str2)