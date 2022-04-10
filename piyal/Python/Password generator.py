import random
import string
 
def randomPassword(size):
    all_chars = string.ascii_letters + string.digits #string.punctuation
    password = ""
    for i in range(size):
        password += random.choice(all_chars)
    return password
 
pass_len = int(input())
print (randomPassword(pass_len))