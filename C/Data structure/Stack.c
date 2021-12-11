#include <stdio.h>
#include <stdlib.h>
#define stacksize 5
int mystack[stacksize],top=-1;

void push(int value)
{
    if(top >= stacksize)
         printf("Stack is full!\n\n");
    else
    {
         printf("Push:%d\n\n",value);
         top++;
         mystack[top] = value;
    }    
}
void displaystack(){
     if(top <=- 1){
       printf("Stack is empty!!\n\n");
      }
     else{
     int i=top;
     printf("Showing full stuck/_ _\n");
     for(;i>=0;i--){
        printf("%d\n",mystack[i]);
     }
     printf("\n");
   }
}
void peek(int pos){
	if(pos <= 0 &&pos >= top){
		printf("Position is out of index.");
	}
	int data = mystack[top - (pos - 1)];
	printf("Peek is %d\n\n",data);
}
void pop()
{
    if(top < 0)
         printf("Stack underflow!\n");
    else
    {
         printf("%d Poped from Stack\n\n",mystack[top]);
         top--;
    }
}
int main()
{
         int num,choice;
     while(1){
         printf("Enter/_ _ _ _\n");
         printf("1 for push/_\n");
         printf("2 for Display Stack/_\n");
         printf("3 for Peek/_\n");
         printf("4 for Pop/_\n");
         printf("5 for Clear Screen?\n");
         printf("0 for Terminate Program/_\n");
         scanf("%d",&choice);
         
         switch(choice){
              case 1 :
                    printf("Enter the number to push/_\n");
                    scanf("%d",&num);
                    push(num);
                    break;
              case 2 :
                    displaystack();
                    break;
              case 3 :
              	  printf("Enter the position of the element/-\n");
              	  scanf("%d",&num);
                    peek(num);
                    break;
              case 4 :
                    pop();
                    break;
              case 0 :
                    break;
              default:
                    printf("Samething wrong!!try again.\n\n");
                    break;
           }
        if(choice==0){
             system("clear");
             printf("Program terminated!!\n");
              break;
          }
        if(choice==5){
              system("clear");
          }
  }
    
     return 0;
}