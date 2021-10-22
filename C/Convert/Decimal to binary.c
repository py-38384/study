#include <stdio.h>
#include <stdlib.h>
void tobinary(int num){
	if(num == 1){
		printf("Binary of %d:\n",num);
		printf("=1\n");
		return;
	}
	int binary[100],temp,bit[100],n = 0;
	int i;
	temp = num/2;
    bit[n] = num%2;
    n++;
	while(1){
		 bit[n] = temp%2;
		 temp = temp/2;
		 n++;
		 if(temp == 0){
		 	break;
		 }
	}
	int c = n--;
	for(i = 0;i < c;i++){
		binary[i] = bit[n];
		n--;
	}
	printf("Binary of %d:\n",num);
	printf("=");
	for(i = 0;i < c;i++){
		printf("%d",binary[i]);
	}
	printf("\n");
	return;
}
int main()
{
	int num;
	while(1){
      	printf("Enter the number/_\n");
      	scanf("%d",&num);
      	if(num <= 0){
      		printf("Can't convert\n");
      		break;
      	}
      	tobinary(num);
	}
	return 0;
}