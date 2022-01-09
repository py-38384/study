#include <stdio.h>
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
}
void marge(int a[], int low, int mid, int high)
{
    int i, j, k, b[100];
    i = low;
    j = mid + 1;
    k = low;
    while (i <= mid && j <= high)
    {
        if (a[i] < a[j])
        {
            b[k] = a[i];
            i++;
            k++;
        }
        else
        {
            b[k] = a[j];
            j++;
            k++;
        }
    }
    while (i <= mid)
    {
        b[k] = a[i];
        i++;
        k++;
    }
    while (j <= high)
    {
        b[k] = a[j];
        j++;
        k++;
    }
    for (i = low; i <= high; i++)
    {
        a[i] = b[i];
    }
}
void margeSort(int arr[], int low, int high)
{
    int mid;
    if (low >= high)
    {
        return;
    }
    mid = (low + high) / 2;
    margeSort(arr, low, mid);
    margeSort(arr, mid + 1, high);
    marge(arr, low, mid, high);
}
int main()
{
    int arr[100] = {30, 14, 20, 50, 60, 31, 10, 11, 2, 68};
    int n = 10;
    printf("Enter a size of array/-\nor inter 0 for a demo|---\n-");
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
   printf("Array before sort/-\n=  ");
    printArray(arr, n); 
    margeSort(arr, 0, n - 1);
    printf("\nArray after sort/-\n=  ");
    printArray(arr, n);
    return 0;
}