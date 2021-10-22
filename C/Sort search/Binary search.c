#include <stdio.h>
int main()
{
   int i,first,last,mid,size,search,flag = 0;
   int arr[100];

   printf("Enter number of elements...\n");
   scanf("%d",&size);
   
   printf("Enter the array in ascending order_ _ _\n",size);
   for(i=0;i<size;i++){
      scanf("%d",&arr[i]);
   }
   
   printf("Enter the number to be search...\n");
   scanf("%d",&search);
   
   first = 0;
   last = size - 1;
   mid = (first+last)/2;
   while(first <= last){
        if(arr[mid] < search)
           first = mid + 1;
           mid=(first + last)/2;
        if(arr[mid]==search){
        	flag = 1;
          printf("%d found at location %d.\n",search,mid+1);
          break;
       }
        if(arr[mid] > search)
         last = mid - 1;
        mid = (first + last)/2;
 }
     if(flag == 0)
         printf("Not found!! %d isn't present in the list.\n",search);
       return 0;
}