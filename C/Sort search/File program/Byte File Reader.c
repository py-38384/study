#include <stdio.h>
#include <stdlib.h>
int main()
{
	int c;
	FILE*filedriver;
	filedriver = fopen("/storage/emulated/0/Text.txt","rb");//this statement should change if file address of name changed.
	if(filedriver == NULL){
		printf("Samething Wrong.Error!!\n");
	}
    else{
    	while((c = getc(filedriver)) !=EOF){
    		printf("%c",c);
    	}
    }
    fclose(filedriver);
    return 0;
}