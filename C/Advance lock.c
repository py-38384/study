#include <stdio.h>
#include <stdlib.h>
int num = NULL;
void lock(){
	
    FILE *file;
	file = fopen("/storage/emulated/0/lock.l","w");
	char n[100];
	printf("Enter the PIN to set/_\n");
    scanf("%s",&n);
	fputs(n,file);
	fclose(file);

	return;
}
int main(){
	FILE *filedriver;
	int PIN;
	int unlock = 0;
    filedriver = fopen("/storage/emulated/0/lock.l","a");
    fclose(filedriver);
    line1:
    filedriver = fopen("/storage/emulated/0/lock.l","r");
    fscanf(filedriver,"%d",&PIN);
    fclose(filedriver);
    //printf("%d\n",PIN);
    if(PIN == NULL){
        lock();
        system("clear");
        printf("Here");
        goto line1;
    }
    int key,count = 5;
    while(1){
    if(count == 5){
    printf("Enter 5 digit PIN/_\n");
    scanf("%d",&key);
    count--;
    }
    system("clear");
    if(key == PIN){
    	printf("System unlocked.\n");
    	unlock = 1;
    	scanf("%d",&num);
        if(num == 1){
        	lock();
        }
        break;
    }
    if(key!=PIN){
    	printf("Wrong PIN! Enter 5 digit code again.\n");
    	printf("Attempt remain %d time...\n",count);
    	scanf("%d",&key);
    	count--;
    }
    system("clear");
    if(count<=0 && key!=PIN){
    	printf("System was locked forever.\n");
    	break;
    }
}
	return 0;
}
