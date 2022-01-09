#include <stdio.h>
int main()
{
    int data[100],n,temp,i,j;
    printf("Enter size of the array_ _ _\n");
    scanf("%d",&n);
    printf("Enter the array_ _ _\n");
    for(i = 0;i < n;i++){
       scanf("%d",&data[i]);
    }
    for(i = 1;i < n;i++){
        temp = data[i];
        j = i - 1;
        while(data[j] > temp){
        data[j+1]=data[j];
            j--;
       }
       data[j+1]=temp;
    }
    printf("Sorted array_ _ _\n");
    for(i = 0;i < n;i++){
       printf("%d ",data[i]);
      }
   return 0;
}
