#include <stdio.h>
int main(){
	int i,n;
	printf("How many row you want/- ");
	scanf("%d",&n);
	int j = n;
	int d = 1,k = 1;
	printf("\n");
	for(i = 1;i <= n;i++){
	     for( ;k <= n;k++){
	        	printf(" ");
	     }
     	for( ;j <= n;j++){
		    	printf("* ");
     	}
    	printf("\n");
    	j = n-i;
    	d++;
    	k=d;
    	
   }
   return 0;
}