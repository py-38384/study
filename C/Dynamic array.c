#include <stdio.h>
#include <stdlib.h>
int main()
{
	int num,i = 1;
	int*pointer;
	pointer = malloc(sizeof(*pointer));
	scanf("%d",&num);
	*pointer = num;
	while(1){
		pointer = realloc(pointer,1*sizeof(*pointer));
		scanf("%d",&num);
		if(num == 0){
			break;
		}
		*(pointer+i) = num;
		i++;
	}
	printf("Showing full array_ _ _ \n");
	for(int c = 0;c < i;c++){
		printf("%d\n",*(pointer+c));
	}
	return 0;
}