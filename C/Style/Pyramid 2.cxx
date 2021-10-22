#include <stdio.h>
int main(){
	int i,n = 20;
	int j = n;
	int d = 0,k = 0;
	for(i = 1;i <= n;i++){
	     for( ;k < n;k++){
	     	printf(" ");
	     }
     	for( ;j <= n;j++){
		    	printf("* ");
     	}
    	printf("\n");
    	j = n;
    	j = n-i;
    	d++;
    	k=d;
    	
   }
   return 0;
}