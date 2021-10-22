#include <stdio.h>
int main()
{
    int array[500],n,pos,temp,i,j;
    printf("Enter the size of array_ _ _\n");
    scanf("%d",&n);
    printf("Enter the array_ _ _\n");
    for(i=0;i<n;i++){
       scanf("%d",&array[i]);
    }
    for(i = 0;i< (n-1);i++){
       pos = i;
       for(j = i+1;j < n;j++){
          if(array[pos] > array[j])
            pos = j;
           
       }
          if(pos != i){
          temp=array[i];
          array[i]=array[pos];
          array[pos]=temp;
         }
     }

     
     printf("Sorted array_ _ _ _\n");
     for(i=0;i<n;i++){
        printf("%d ",array[i]);
     }
   return 0;
}