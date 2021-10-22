#include <stdio.h>
#include <stdlib.h>
#include <malloc.h>
struct node{
	struct node*previous;
	int data;
	struct node*next;
};
struct node*head = NULL,*tail = NULL;
int count = 0;
void insert_at_beginning(){
	struct node*newnode;
	int itam;
	newnode = (struct node*)malloc(sizeof(struct node));
	printf("Enter the value.\n");
	scanf("%d",&itam);
	newnode->data = itam;
	count++;
	if(head == NULL){
		head = newnode;
		tail = head;
		newnode->next = head;
		newnode->previous = head;
		printf("%d inserted.\n",itam);
		return;
	}
	tail->next = newnode;
	newnode->previous = tail;
	newnode->next = head;
	head->previous = newnode;
	head = newnode;
	printf("%d inserted at the beginning.\n",itam);
}
void insert_at_last(){
	struct node*newnode;
	int itam;
	newnode = (struct node*)malloc(sizeof(struct node));
	printf("Enter value.\n");
	scanf("%d",&itam);
	newnode->data = itam;
	count++;
	if(head == NULL){
		tail = newnode;
		head = tail;
		tail->next = tail;
		tail->previous = tail;
		printf("%d inserted.\n",itam);
		return;
	}
	tail->next = newnode;
	newnode->previous = tail;
	newnode->next = head;
	head->previous = newnode;
	tail = newnode;
	printf("%d inserted at the end.\n",itam);
}
void insert_at_position(){
	     int i,itam,pos;
	     printf("Enter the position/_\n");
	     scanf("%d",&pos);
	     if(head == NULL||pos >= count||pos <= 1){
	     	printf("list is empty.or you trying to inter data in wrong position.\n");
	     	return;
	     }
	     count++;
	     printf("Enter the data/_\n");
	     scanf("%d",&itam);
	     struct node*temp = head,*newnode,*temp1;
	     newnode = (struct node*)malloc(sizeof(struct node));
	     newnode->data = itam;
	     for(i = 0;i < pos-2;i++){
	     	temp = temp->next;
	     }
	     temp1 = temp->next;
	     temp->next = newnode;
	     newnode->previous = temp;
	     newnode->next = temp1;
	     temp1->previous= newnode;
	     printf("%d inserted at the position of %d.\n",itam,pos);
}
void display(){
	struct node*ptr;
	ptr = head;
	if(ptr == NULL){
		printf("List is empty.\n");
	    return;
	}
	printf("%d element showing\n",count);
	printf("------------------\n");
	while(ptr->next!=head){
		printf("%d \n",ptr->data);
		ptr = ptr->next;
	}
	printf("%d \n",ptr->data);
}
void display_backword(){
	struct node*ptr;
	int flag = count;
	ptr = tail;
	if(head == NULL){
		printf("List is empty.\n");
		return;
	}
	printf("%d element showing in backword\n",count);
	printf("------------------------------\n");
	while(ptr->previous!=tail){
		 printf("%d \n",ptr->data);
		 ptr = ptr->previous;
		 if(flag<=0){
		 	break;
		 }
		 flag--;
	}
	printf("%d \n",ptr->data);
}
void delete_from_beginning(){
	if(head == NULL){
		printf("List is empty.\n");
		return;
	}
	count--;
	struct node*temp = head->next;
	int n = head->data;
	tail->next = temp;
	temp->previous = tail;
	free(head);
	head = temp;
	if(count == 0){
		head = NULL;
		tail = NULL;
	}
	printf("%d deleted from beginning successfully.\n",n);
}
void delete_from_end(){
	if(head == NULL){
		printf("List is empty.\n");
		return;
	}
	count--;
	struct node*temp = tail->previous;
	int n = tail->data;
	head->previous = temp;
	temp->next = head;
	free(tail);
	tail = temp;
	if(count == 0){
		head = NULL;
		tail = NULL;
	}
	printf("%d deleted from end successfully.\n",n);
}
void delete_from_position(){
			int pos,i,x;
			printf("Enter the position to delete data/_\n");
			scanf("%d",&pos);
			if(head == NULL||pos >= count||pos <= 1){
				printf("List is empty.or you trying to delete data from wrong position.\n");
				return;
			}
			struct node*temp = head,*temp1,*temp2;
			for(i = 0;i < pos-1;i++){
				temp = temp->next;
			}
			count--;
			x = temp->data;
			temp1 = temp->previous;
			temp2 = temp->next;
			temp1->next = temp2;
			temp2->previous = temp1;
			free(temp);
			printf("%d deleted from the position of %d.\n",x,pos);
}
int main()
{
	int choice;
	while(1){
		printf("_ _ _ _Enter_ _ _ _\n");
		printf("1 for insert at beginning.\n");
		printf("2 for insert at end.\n");
		printf("3 for insert at a spacific position.\n");
		printf("4 for display all itam.\n");
		printf("5 for display all itam in backword.\n");
		printf("6 for delete from beginning.\n");
		printf("7 for delete from end.\n");
		printf("8 for delete data from a position\n");
		printf("9 for clear screen.\n");
		printf("10 for Terminate whole program.\n");
		printf("------\n");
		scanf("%d",&choice);
		printf("------\n");
		switch(choice){
			case 1:insert_at_beginning();
			            break;
			case 2:insert_at_last();
			            break;
			case 3:insert_at_position();
			            break;
			case 4:display();
			            break;
			case 5:display_backword();
			            break;
			case 6:delete_from_beginning();
			            break;
			case 7:delete_from_end();
			            break;
			case 8:delete_from_position();
			            break;
			case 9:system("clear");
			            break; 
			case 10:break;                  
		    default:printf("Erorr!!try again.\n");
		                break;
		}
		if(choice == 10){
			printf("Program Terminated...\n");
			break;
		}
	}
	return 0;
}