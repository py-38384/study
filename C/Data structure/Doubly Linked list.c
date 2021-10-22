#include <stdio.h>
#include <stdlib.h>
struct node{
       int data;
       struct node*previous;
       struct node*next;
};
struct node*head = NULL,*tail = NULL;
int count = 0;
void insert_at_beginning(int value){
     struct node*newnode;
     newnode = (struct node*)malloc(sizeof(struct node));
     newnode->data = value;
     newnode->previous = NULL;
     count++;
     if(head == NULL){
        newnode -> previous = NULL;
        newnode -> next = NULL;
        head = newnode;
        tail = newnode;
        printf("%d insertion successful.\n",value);
        return;
     }
     else{
     newnode->next=head;
     head->previous=newnode;
     head = newnode;
     }
     printf("%d insertion successful.\n",value);
}
void insert_at_end(int value){
     struct node*newnode;
     newnode=(struct node*)malloc(sizeof(struct node));
     newnode->data = value;
     newnode->next = NULL;
     count++;
     if(head == NULL){
        newnode->previous = NULL;
        newnode->next = NULL;
        tail = head = newnode;
        printf("%d inertion successful.\n",value);
        return;
     }
     newnode->previous = tail;
     tail->next = newnode;
     tail = newnode;
     printf("%d insertion successful.\n",value);
}
void insert_after(int value,int pos){
     int i;
     struct node*newnode,*temp1 = head,*temp2;
     newnode = (struct node*)malloc(sizeof(struct node));
     newnode->data = value;
     if(head == NULL||pos >= count||pos == 1){
        printf("Error!!can't enter at this position.\n");
        free(newnode);
        return;
     }
     count++;
     for(i = 0;i < pos-2;i++){
         temp1 = temp1->next;
         }
         temp2 = temp1->next;
      newnode->previous = temp1;
      temp1->next = newnode;
      newnode->next = temp2;
      temp2->previous = newnode;
      printf("%d insertion at %d position successful.\n",value,pos);
}
      
void traverse(){
     struct node*temp;
     temp = head;
     if(temp == NULL){
        printf("No element in the list.\n");
        return;
       }
     printf("There are %d element in the list.\n",count);
     while(temp->next!=NULL){
           printf("%d \n",temp->data);
           temp = temp->next;
          }
     printf("%d \n",temp->data);
}
void reverse_traverse(){
	 struct node*temp;
	 temp = tail;
	 if(temp == NULL){
	 	printf("No element in the list.\n");
	 	return;
	}
	 printf("There are %d element in the list.\n",count);
	 while(temp->previous!=NULL){
	 	     printf("%d \n",temp->data);
	 	     temp = temp->previous;
	 }
	 printf("%d \n",temp->data);
} 
void delete_from_beginning(){
     int n;
     if(head == NULL){
        printf("List is Empty.\n");
        return;
       }
        count--;
        if(count == 0){
          printf("%d deletion successful.\n",head->data);
          free(head);
          head = NULL;
          tail = NULL;
          return;
        }
        struct node*temp = head;
        n = temp->data;
        head = head->next;
        head->previous = NULL;
        free(temp);
        printf("%d deletion successful.\n",n);
}
void delete_from_end(){
     if(head==NULL){
       printf("List is Empty.\n");
       return;
     }
       count--;
         if(count == 0){
           printf("%d deletion successful.\n",head->data);
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
       printf("%d deletion successful.\n",n);
}
void delete_at_specific(int delvalue){
     if(head==NULL||delvalue==count||delvalue==1){
       printf("Error!!List is empty or you trying to delete data from wrong position\n");
       return;
     }
       count--;
       struct node*temp = head;
       struct node*x;
       for(int i = 0;i < delvalue-1;i++){
           temp = temp->next;
          }
       int n = temp->data;
       x = temp->previous;
       x->next = temp->next;
       x = temp->next;
       x->previous = temp->previous;
       free(temp);
       printf("%d from position of %d deletion successful.\n",n,delvalue);
}
int main()
{
   int choice,value,pos;
   while(1){
   printf("_ _ _ _Enter_ _ _ _\n");
   printf("1 for insert at beginning.\n");
   printf("2 for insert at specific position.\n");
   printf("3 for insert at end.\n");
   printf("4 for traverse.\n");
   printf("5 for reverse traverse.\n");
   printf("6 for delete at beginning.\n");
   printf("7 for delete specific position.\n");
   printf("8 for delete at end.\n");
   printf("9 for clear screen.\n");
   printf("0 for terminete program.\n");
   scanf("%d",&choice);
   switch(choice){
        case 1:printf("Enter the element/_\n");
               scanf("%d",&value);
               insert_at_beginning(value);
               break;
        case 2:printf("Enter the position/_\n");
               scanf("%d",&pos);
               printf("Enter the element/_\n");
               scanf("%d",&value);
               insert_after(value,pos);
               break;
        case 3:printf("Enter the element/_\n");
               scanf("%d",&value);
               insert_at_end(value);
               break;
        case 4:traverse();
               break;
        case 5:reverse_traverse();
               break;
        case 6:delete_from_beginning();
               break;
        case 7:printf("Enter the position/_\n");
               scanf("%d",&pos);
               delete_at_specific(pos);
               break;
        case 8:delete_from_end();
               break;
        case 9:system("clear");
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