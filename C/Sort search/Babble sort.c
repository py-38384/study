#include <stdio.h>
int main()
{
    int i, j, num, x, isSorted;
    int arr[100];
    printf("Enter the amount of num\n");
    scanf("%d",&num);
    printf("Plz inter the number one by one___\n");
    for(i = 0;i < num;i++){
        scanf("%d",&arr[i]);
    }
      for(i = 0;i < num-1;i++){
         isSorted = 1;
         for(j = 0;j < num-i-1;j++){
            if(arr[j] > arr[j+1]){
              
               x = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = x;
               isSorted = 0;
             }
             if(isSorted){
                 break;
                 }
           }
         }
       printf("After appling Babble sort.....\n");
       for(i = 0;i < num;i++){
          printf("%d  ",arr[i]);
         }
      
     return 0;
}