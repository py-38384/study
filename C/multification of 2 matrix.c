#include <stdio.h>
#include <stdlib.h>
int main()
{
     int i, j, mrow1, mcolum1, mrow2, mcolum2, k,sum=0;
     int a[10][10], b[10][10], c[10][10];

     printf("Enter the row and colum of matrix 1...\n");
     scanf("%d %d",&mrow1,&mcolum1);
     
     printf("Plz inter the 1st matrix_ _ _\n");
     for(i = 0;i < mrow1;i++){
        for(j = 0;j < mcolum1;j++){
            scanf("%d",&a[i][j]);
           }
        }

     printf("Enter the row and colum of matrix 2...\n");
     scanf("%d %d",&mrow2,&mcolum2);
     if(mcolum1!=mrow2){
        printf("matrix can not be multiplied!!!");
       }
     else{

      printf("plz inter the 2nd matrix_ _ _\n");
      for(i = 0;i < mrow2;i++){
         for(j = 0;j < mcolum2;j++){
            scanf("%d",&b[i][j]);
           }
       }
    
      system("clear");
    printf("1st matrix_ _ _\n\n");
      for(i = 0;i < mrow1;i++){
         for(j = 0;j < mcolum1;j++){
             printf("%d\t",a[i][j]);
            }
              printf("\n");
       }
    printf("\n2nd matrix_ _ _\n\n");
      for(i = 0;i < mrow2;i++){
         for(j = 0;j < mcolum2;j++){
            printf("%d\t",b[i][j]);
            }
              printf("\n");
       }
      for(i = 0;i < mrow1;i++){
         for(j = 0;j < mcolum2;j++){
            for(k = 0;k < mcolum1;k++){
               sum = sum+(a[i][k]*b[k][j]);
               }
             c[i][j] = sum;
               sum = 0;
           }
      }

    printf("\nPoduct of matrix_ _ _ _\n\n");
     for(i = 0;i < mrow1;i++){
        for(j = 0;j < mcolum2;j++){
            printf("%d\t",c[i][j]);
           }
               printf("\n");
       }

   }
       return 0;
}