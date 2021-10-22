#include <stdio.h>
#include <stdlib.h>
struct node{
    int data;
    struct node*next;
};
struct node*start = NULL;
void insert_at_begin(int);
void insert_at_end(int);
void insert_at_position(int,int);
void traverse();
void see(int);
void delete_from_begin();
void delete_from_end();
void delete_from_position(int);
int count = 0;
int main()
{
int i,data,pos;
while(1){
      printf("_ _ _ _Enter_ _ _ _\n");
      printf("1 for Insert an element at the beginning.\n");
      printf("2 for Insert an element at the end.\n");
      printf("3 for Insert an element at a position.\n");
      printf("4 for Traverse linked list.\n");
      printf("5 for see spacific data.\n");
      printf("6 for Delete an element from begining.\n");
      printf("7 for Delete an element from end.\n");
      printf("8 for Delete an element from a position.\n");
      printf("9 for Clear.\n");
      printf("0 for Terminete whole Program.\n");
      scanf("%d",&i);
     switch(i){
           case 1:printf("Enter the element/_\n");
                  scanf("%d",&data);
                  insert_at_begin(data);
                  break;
           case 2:printf("Enter the element/_\n");
                  scanf("%d",&data);
                  insert_at_end(data);
                  break;
           case 3:printf("Enter position/_\n");
                  scanf("%d",&pos);
                  printf("Enter the element/_\n");
                  scanf("%d",&data);
                  insert_at_position(data,pos);
                  break;
           case 4:traverse();
                  break;
           case 5:printf("Enter the position to see data/_\n");
                  scanf("%d",&pos);
                  if(pos > count){
                  	printf("Out of range\n");
                  	break;
                  }
                  see(pos);
                  break;
           case 6:delete_from_begin();
                  break;
           case 7:delete_from_end();
                  break;
           case 8:printf("Enter the position/_\n");
                  scanf("%d",&pos);
                  delete_from_position(pos);
                  break;
           case 9:system("clear");
           case 0:break;
           default:printf("Wrong input!!try again.\n");
     }
     if(i==0){
       printf("Program termineted!!");
         break;
     }
  }
    return 0;
}
void insert_at_begin(int x){
     struct node*t;
     t = (struct node*)malloc(sizeof(struct node));
     t->data = x;
     count++;
     if(start == NULL){
        start = t;
        start->next = NULL;
        printf("%d insertion successful.\n",x);
        return;
      }
     t->next = start;
     start = t;
     printf("%d insertion successful.\n",x);
}
void insert_at_end(int x){
     struct node*t,*temp;
     t = (struct node*)malloc(sizeof(struct node));
     t->data = x;
     count++;
     if(start == NULL){
        start = t;
        start->next = NULL;
        printf("%d insertion successful.\n",x);
        return;
     }
     temp = start;
     while(temp->next!=NULL){
          temp = temp -> next;
     }
     temp -> next = t;
     t->next = NULL;
     printf("%d insertion successful.\n",x);
}
void insert_at_position(int value,int pos){
     struct node*t,*temp,*u;
     t = (struct node*)malloc(sizeof(struct node));
     t->data = value;
     if(count <= pos||start == NULL){
        printf("Insertion not possible.\n");
        return;
       }
      temp = start;
      count++;
      for(int i = 0;i < pos-2;i++){
          temp=temp->next;
         }
      u = temp->next;
      temp->next = t;
      t->next = u;
      printf("%d insertion at %d successful.\n",value,pos);
}
void traverse(){
     struct node*t;
     t = start;
     if(t == NULL){
       printf("Linked list is empty.\n");
       return ;
     }
   printf("There are %d element in linked list.\n",count);
   while(t->next!=NULL){
       printf("%d\n",t->data);
       t = t->next;
     }
      printf("%d\n",t->data);
}
void see(int pos){
     struct node*temp;
     temp = start;
     if(start == NULL){
        printf("List is empty.\n");
        return;
       }
     for(int i = 0;i < pos-1;i++){
         temp=temp->next;
        }
     printf("Showing data of position %d.\n",pos);
     printf("%d \n",temp->data);
}
void delete_from_begin(){
      struct node*t;
      int n;
     if(start==NULL){
        printf("Linked list is empty.\n");
        return;
      }
     n = start->data;
     t = start->next;
     free(start);
     start = t;
     count--;
     printf("%d deleted from the beginning successful.\n",n);
}
void delete_from_end(){
      struct node*t,*u;
      int n;
      if(start == NULL){
        printf("Linked list is empty.\n");
        return;
      }
      count--;
      if(start->next == NULL){
        n = start -> data;
        free(start);
        start = NULL;
        printf("%d deleted from end successful.\n",n);
        return;
}
      t = start;
      while(t -> next!=NULL){
           u = t;
           t = t->next;
      }
      n = t->data;
      u->next = NULL;
      free(t);
      printf("%d deleted from end successful.\n",n);
}
void delete_from_position(int pos){
     struct node*temp,*u;
     int n;
     if(pos >= count||start == NULL||count == 1){
        printf("Samething wrong!!cannot delete.\n");
        return;
       }
     temp = start;
     count--;
     for(int i = 0;i < pos-1;i++){
         temp=temp->next;
        }
     u = temp->next;
     n = temp->data;
     free(temp);
     temp = start;
     for(int i = 0;i < pos-2;i++){
         temp=temp->next;
        }
     temp->next=u; 
     printf("%d deleted from %d position.\n",n,pos);
}