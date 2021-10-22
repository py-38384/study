def selection_sort(arr):
 for i in range(len(arr)):
    min_idx = i
    for j in range(i+1, len(arr)):
      if arr[min_idx] > arr[j]:
        min_idx = j
      
    # Swap the current with the min element
    temp = arr[i]
    arr[i] = arr[min_idx]
    arr[min_idx] = temp
 return arr

# now test
nums = [64, 25, 12, 22, 11]
sorted_nums = selection_sort(nums)
print (sorted_nums)