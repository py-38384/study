def insertion_sort(arr):
  for i in range(1, len(arr)):
    insert = arr[i]
    # Move elements i-1 and go backwards
    j = i-1
    while insert < arr[j] and j >= 0:
        arr[j+1] = arr[j]
        j = j-1
    arr[j+1] = insert

  return arr

# Test the code
nums = [12, 11, 13, 5, -6]
sorted_nums = insertion_sort(nums)
print (sorted_nums)