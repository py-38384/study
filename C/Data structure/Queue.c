#include <stdio.h>
#include <stdlib.h>
#define queuesize 9
int myqueue[queuesize],temp[queuesize],rear = -1;
void enqueue(int value)
{
 if(rear == queuesize)printf("Queue overflow!\n");
 else{
 	rear++;
 	for(int i = 0;i <= rear;i++)temp[i] = myqueue[i];
 	myqueue[0] = value;
 	for(int i = 0;i <= rear;i++)myqueue[(1+i)] = temp[i];
 	printf("%d enqueue successfully done..\n",value);
 }
}
void dequeue()
{
if(rear <= -1)printf("Queue underflow!\n");
else{
	int num = myqueue[rear];
	rear--;
	printf("%d dequeue successfully done..\n",num);
 }
}
void display()
{
     if(rear <= -1){
       printf("queue is empty!\n");
     }
     else{
     printf("Showing full queue/_\n");
     for(int i = 0;i <= rear;i++)
        printf("%d\n",myqueue[i]);
     }
}
int main()
{
       int value,choice;
      while(1){
           printf("_ _ _ _Inter_ _ _ _\n");
           printf("1 for enqueue/_\n");
           printf("2 for dequeue/_\n");
           printf("3 for display/_\n");
           printf("4 for Clear screen?\n");
           printf("0 for terminate program?\n");
           scanf("%d",&choice);
    switch(choice){
        case 1:
              printf("Enter data to Enqueue/_\n");
              scanf("%d",&value);
              enqueue(value);
              break;
        case 2:
                dequeue();
              break;
        case 3:
              display();
              break;
        case 4:
              break;
        case 0:
              break;
            default:
              printf("Samething is Worng!!Try again.\n");
        }
      if(choice == 4){
            system("clear");
        }
      if(choice == 0){
         printf("Program Terminated...\n");
            break;
        }
}
    return 0;
}
