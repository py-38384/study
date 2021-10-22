#include <stdio.h>
#include <stdlib.h>
struct node{
	int data;
	struct node*next;
};
struct node*head = NULL,*tail = NULL;
int count = 0;
void insert_at_beginning(){
	struct node*newnode;
	newnode = (struct node*)malloc(sizeof(struct node));
	int itam;
	printf("Enter the data/_\n");
	scanf("%d",&itam);
	newnode->data = itam;
	count++;
	if(head == NULL){
		head = newnode;
		tail = head;
		head->next = head;
		printf("%d Inserted successfully.\n",itam);
		return;
	}
	newnode->next = head;
	tail->next = newnode;
	head = newnode;
	printf("%d inserted at the beginning.\n",itam);
}
void insert_at_end(){
	struct node*newnode;
	newnode = (struct node*)malloc(sizeof(struct node));
	int itam;
	printf("Enter the data/_\n");
	scanf("%d",&itam);
	newnode->data = itam;
	count++;
	if(head == NULL){
		head = newnode;
		tail = head;
		head->next = head;
		printf("%d inserted successfully.\n",itam);
		return;
	}
	newnode->next = head;
	tail->next = newnode;
	tail = newnode;
	printf("%d inserted at the end.\n",itam);
}
void insert_at_position(){
	printf("Enter the position/_\n");
	int pos;
	scanf("%d",&pos);
	if(head == NULL||pos >= count||pos == 1){
		printf("Cannot enter at this position!\n");
		return;
	}
	count++;
	printf("Enter the data/_\n");
	int itam;
	scanf("%d",&itam);
	struct node*newnode;
	newnode->data = itam;
	struct node*temp= head,*temp1;
	int i;
	for(i = 0;i < pos-2;i++){
		temp = temp->next;
	}
    temp1 = temp->next;
    temp->next = newnode;
    newnode->next = temp1;
	printf("%d inserted at the position %d successfully.\n",itam,pos);
}
void display(){
	if(head == NULL){
		printf("List is empty.\n");
		return;
	}
	struct node*temp = head;
	printf("%d elements showing.\n",count);
	printf("------------------------------\n");
	while(temp->next!=head){
		      printf("%d  \n",temp->data);
		      temp = temp->next;
	}
	printf("%d  \n",temp->data);
}
void delete_from_beginning(){
	if(head == NULL){
		printf("List is empty.\n");
		return;
	}
    int n = head->data;
	if(head == tail){
		free(head);
		head = NULL;
		tail = NULL;
		printf("%d deleted successfully.\n",n);
		return;
	}
	struct node*temp = head->next;
	count--;
	tail->next = temp;
	free(head);
	head = temp;
	printf("%d deleted successfully from Beginning.\n",n);
}
void delete_from_end(){
	if(head == NULL){
		printf("List is empty.\n");
		return;
	}
	int n = head->data;
	count--;
	if(head == tail){
		free(head);
		head = NULL;
		tail = NULL;
		printf("%d deleted successfully.\n",n);
		return;
	}
	int i;
	struct node*temp = head;
    for(i = 0;i < count-1;i++){
    	temp = temp->next;
    }
    temp->next = head;
    int x;
    x = tail->data;
    free(tail);
    tail = temp;
    printf("%d deleted from end.\n",x);
}
void delete_spacific_data(){
	int itam;
	printf("Enter the data to delete/_\n");
	scanf("%d",&itam);
	if(head == NULL||count == 1||itam == tail->data||itam == head->data){
		printf("List is empty!or you are trying to delete data from wrong position.\n");
		return;
	}
    struct node*temp = head,*temp1 = head,*temp2 = head;
    int flag = 1;
    while(temp->data!=itam){
    	     if(temp->data == itam){
    	     	break;
    	     }
    	     temp=temp->next;
    	     flag++;
    	     if(flag > count){
    	     	break;
    	     }
    }
    if(temp->data!=itam){
    	printf("%d not present at the list.\n",itam);
    	return;
    }
    count--;
    int i;
    for( i = 0;i < flag-2;i++){
    	 temp1 = temp1->next;
    }
    for(i = 0;i < flag;i++){
    	temp2 = temp2->next;
    }
    temp1->next = temp2;
    printf("%d deleted from %d sccessful.\n",itam,flag);
}
int main(){
	int choice;
	while(1){
		printf("_ _ _ _ _Enter_ _ _ _ _\n");
		printf("1 for insert at beginning.\n");
		printf("2 for insert at end.\n");
		printf("3 for insert at spacific position.\n");
		printf("4 for display all element.\n");
		printf("5 for delete from beginning.\n");
		printf("6 for delete from end.\n");
		printf("7 for delete spacific data.\n");
		printf("8 for clear screen.\n");
		printf("0 for Terminate whole program.\n");
		scanf("%d",&choice);
		switch(choice){
			case 1:insert_at_beginning();
			            break;
			case 2:insert_at_end();
			            break;
			case 3:insert_at_position();
			            break;
			case 4:display();
			            break;
			case 5:delete_from_beginning();
			            break;
			case 6:delete_from_end();
			            break;
			case 7:delete_spacific_data();
			            break;
			case 8:system("clear");
			            break;
			case 0:break;
		 default:printf("Error!!! try again.\n");    
		                break;
		}
		if(choice == 0){
			 printf("whole program terminated!!!\n");
			 break;
		}
	}
	return 0;
}