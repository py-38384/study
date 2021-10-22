#include <stdio.h>
int main()
{
    int a[100],i,n,c=0,l,s=0;
    printf("Plz inter the size of an array...\n");
    scanf("%d",&n);
    
    printf("Plz inter the element of the array_ _ _\n");
    for(i = 0;i < n;i++){
       scanf("%d",&a[i]);
       }
     printf("Plz inter the number to be search...\n");
     scanf("%d",&l);
     for(i = 0;i < n;i++){
         s++;
        if(l == a[i]){
          c++;
          break;
         }
       }  
     if(c == 1){
       printf("Entered number is founded in position %d\n",s);
     }
     else{
       printf("Entered number is not found!!\n");
      }
    return 0;
}