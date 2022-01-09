#include <stdio.h>
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}
void selectionSort(int arr[], int n)
{
    int indexOfMin, temp;
    for (int i = 0; i < n - 1; i++)
    {
        indexOfMin = i;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[indexOfMin] > arr[j])
            {
                indexOfMin = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[indexOfMin];
        arr[indexOfMin] = temp;
    }
}
int main()
{
    int arr[] = {45, 2, 54, 16, 7, 84, 22, 34};
    int n = 8;
    printArray(arr, n);
    selectionSort(arr, n);
    printArray(arr, n);
    return 0;
}