#include <stdio.h>
#include <stdlib.h>
int main()
{
    int lock, pass, i,num = 5,count = 1;
    int unlock = 0;
    printf("Plz set the 5 Digit PIN_ _ _\n");
    scanf("%d",&lock);
    system("clear");
    for(i=1;i<6;i++){
       if(i==1){
       printf("Enter 5 digit PIN_ _ _\n");
       }
       scanf("%d",&pass);
       system("clear");
       if(pass == lock){
          printf("System unlocked.");
          unlock = 1;
          break;
}
       if(pass!=lock){
          printf("Wrong Pin!!! enter the 5 digit Pin again...\n");
          num--;
          printf("Attempt remain %d time...\n",num);
      }
count++;
   
}
   if(count > 5){
     system("clear");
     printf("System was locked forever\n");
}
return 0;
}