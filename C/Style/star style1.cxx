#include <stdio.h>
int main(){
	int j;
	for(int i = 0;i < 50;i++){
		j = i;
		for(  ;j < 50;j++){
			printf("*");
		}
		printf("\n");
	}
	return 0;
}