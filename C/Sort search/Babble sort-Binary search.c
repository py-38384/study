#include <stdio.h>
int main()
{
    int i,j,temp,a[100],size;
    printf("Enter the size of array/_\n");
    scanf("%d",&size);
    printf("Enter the array_ _ _\n");
    for(i=0;i<size;i++){
       scanf("%d",&a[i]);
      }
    for(i=2;i<size;i++){
       for(j=0;j<size-(i-1);j++){
          if(a[j] > a[j+1]){
             temp = a[j];
             a[j] = a[j+1];
             a[j+1] = temp;
      }
    }
  }
     int s,first,last,mid;
     printf("Enter the number to be search_ _ _\n");
     scanf("%d",&s);
     first = 0;
     last  = size - 1;
     mid = (first+last)/2;
     while(first<=last){
           if(a[mid]==s){
              printf("[Number is founded] in postion of %d in sorted array.\n",mid+1);
              break;
            }
           if(a[mid]<s){
              first=mid+1;
              mid = (first+last)/2;
             }
           if(a[mid]>s){
              last=mid-1;
              mid = (first+last)/2;
             }
          }
        if(first>last){
             printf("%d is not found.\n",s);
          }
       printf("Shorted array/_ _\n");
       for(i = 0;i < size;++i){
       	printf("%d\n",a[i]);
       }
      return 0;
}