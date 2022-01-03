#include <stdio.h>
#include <stdlib.h>
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}
void insertionSort(int arr[], int n)
{
    int i, j, num;
    for (i = 1; i < n; i++)
    {
        j = i - 1;
        num = arr[i];
        while (j >= 0 && arr[j] > num)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = num;
    }
}
int main()
{
    int n = 10;
    int arr[] = {34, 75, 10, 87, 10, 15, 3, 7, 29, 64};
    printf("Enter the size of the array/-\nEnter 0 for quick array: ");
    scanf("%d", &n);
    if (n > 0)
    {
        printf("Enter the array/-\n");
        for (int i = 0; i < n; i++)
        {
            scanf("%d", &arr[i]);
        }
    }
    else
    {
        n = 10;
    }

    system("clear");
    printf("Before sorting/-\n");
    printArray(arr, n);
    insertionSort(arr, n);
    printf("After sorting/-\n");
    printArray(arr, n);
    return 0;
}