#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
}
int maximus(int arr[], int n)
{
    int max = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        if (max < arr[i])
        {
            max = arr[i];
        }
    }
    return max;
}
void countSort(int arr[], int n)
{
    int i, j;
    int max = maximus(arr, n);
    int *count = (int *)malloc((max + 1) * sizeof(int));
    for (i = 0; i <= max; i++)
    {
        count[i] = 0;
    }
    for (i = 0; i < n; i++)
    {
        count[arr[i]]++;
    }
    j = 0;
    i = 0;
    while (i <= max)
    {
        if (count[i] > 0)
        {
            arr[j] = i;
            count[i]--;
            j++;
        }
        else
        {
            i++;
        }
    }
}
int main()
{
    int arr[100] = {15, 39, 21, 25, 31, 70, 28, 41, 92, 10};
    int n = 10;
    printf("Enter array size/-\nor enter 0 for demo|--\n> ");
    scanf("%d", &n);
    if (n > 0)
    {
        printf("Enter the elements/-\n");
        for (int i = 0; i < n; i++)
        {
            scanf("%d", &arr[i]);
        }
    }
    else
    {
        n = 10;
    }
    printf("Array before sorting/-\n= ");
    printArray(arr, n);
    countSort(arr, n);
    printf("\nArray after sorting/-\n= ");
    printArray(arr, n);
    return 0;
}