def bubbleSort(list):
  n = len(list)-1
  for i in range(n):
    for j in range(n-1):
      if list[j] > list[j+1] :
        temp = list[j]
        list[j] = list[j+1]
        list[j+1] = temp
  return list
  
nums = [64, 34, 25, 12, 22, 11, 90]
sorted_nums = bubbleSort(nums)
print (sorted_nums)