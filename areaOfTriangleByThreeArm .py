import math
a, b, c = int(input('Enter arm 1/-')), int(input('Enter arm 2/-')), int(input('Enter arm 3/-'))
s = (a+b+c) / 2
area = math.sqrt(s*(s-a)*(s-b)*(s-c))
print('The area of your Triangle is {0}'.format(area))

#question no 5