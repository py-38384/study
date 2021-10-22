#include <stdio.h>
void merge(int a[],int start, int mid, int mid1, int end)
{
     int temp[50];
     int i,j,k;
     i = start;
     j = mid1;
     k = 0;
    while(i <= mid&&j <= end){
         if(a[i] < a[j])
             temp[k++] = a[i++];
         else
             temp[k++] = a[j++];
    }
   while(i <= mid)
         temp[k++] = a[i++];
   while(j <= end)
         temp[k++] = a[j++];

      for(i = start,j=0;i <= end;i++,j++)
                 a[i] = temp[j];
}
  void mergesort(int a[],int start,int end){
          
        int mid;
       if(start >= end){
       	return;
       	}
          mid = (start + end)/2;
          mergesort(a,start,mid);
          mergesort(a,mid+1,end);
          merge(a,start,mid,mid+1,end);
    
}
int main()
{
     int a[100],size,i;
     printf("Enter no of element/_\n");
     scanf("%d",&size);
     printf("Enter array elements_ _ _\n");
     for(i = 0;i < size;i++) scanf("%d",&a[i]);
     mergesort(a,0,size-1);
     printf("Sorted array is/-\n");
     for(i = 0;i < size;i++){
         printf("%d ",a[i]);
     }
      return 0;
}
