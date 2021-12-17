#include <stdio.h>
#include <stdlib.h>
struct node{
       int data;
       struct node*previous;
       struct node*next;
};
struct node*head = NULL,*tail = NULL;
int count = 0;
void enqueue(int value){
     struct node*newnode;
     newnode = (struct node*)malloc(sizeof(struct node));
     if(newnode == NULL){
     	printf("Queue overflow!!");
     	return;
     }
     newnode->data = value;
     newnode->previous = NULL;
     count++;
     if(head == NULL){
        newnode -> next = NULL;
        head = newnode;
        tail = head;
        printf("%d enqueue successful.\n",value);
        return;
     }
     else{
     newnode->next=head;
     head->previous=newnode;
     head = newnode;
     }
     printf("%d enqueue successful.\n",value);
}
void traverse(){
     struct node*temp;
     temp = head;
     if(temp == NULL){
        printf("No element in the queue.\n");
        return;
       }
     printf("There are %d element in the queue.\n",count);
     while(temp!=NULL){
           printf("%d \n",temp->data);
           temp = temp->next;
          }
}
void dequeue(){
     if(head==NULL){
       printf("Queue is Empty.\n");
       return;
     }
       count--;
         if(count == 0){
           printf("%d dequeue successful.\n",head->data);
          free(head);
          head = NULL;
          tail = NULL;
          return;
        }
       struct node*temp=tail;
       int n = tail->data;
       tail = tail->previous;
       tail->next = NULL;
       free(temp);
       printf("%d dequeue successful.\n",n);
}
int main()
{
   int choice,value,pos;
   while(1){
   printf("_ _ _ _Enter_ _ _ _\n");
   printf("1 for enqueue.\n");
   printf("2 for traverse.\n");
   printf("3 for dequeue.\n");
   printf("4 for clear screen.\n");
   printf("0 for terminete program.\n");
   scanf("%d",&choice);
   switch(choice){
        case 1:printf("Enter the element/_\n");
               scanf("%d",&value);
               enqueue(value);
               break;
        case 2:traverse();
               break;
        case 3:dequeue();
               break;
        case 4:system("clear");
               break;
        case 0:break;
        default:printf("Wrong choice!!try again.\n");
   }
      if(choice == 0){
           printf("Program Termineted...\n");
           break;
        }
   }
    return 0;
}