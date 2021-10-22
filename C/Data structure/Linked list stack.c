#include <stdio.h>
#include <stdlib.h>
struct node{
    int data;
    struct node*next;
};
struct node*start = NULL;
void push(int);
void traverse();
void peek();
void pop();
int count = 0;
int main()
{
int i,data,pos;
while(1){
      printf("_ _ _ _Enter_ _ _ _\n");
      printf("1 for push a data .\n");
      printf("2 for Traverse stack.\n");
      printf("3 for peek data.\n");
      printf("4 for pop the data.\n");
      printf("5 for Clear.\n");
      printf("0 for Terminete whole Program.\n");
      scanf("%d",&i);
     switch(i){
           case 1:printf("Enter the element/_\n");
                  scanf("%d",&data);
                  push(data);
                  break;
           case 2:traverse();
                  break;
           case 3:peek();
                  break;
           case 4:pop();
                  break;
           case 5:system("clear");
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
void push(int x){
     struct node*t;
     t = (struct node*)malloc(sizeof(struct node));
     t->data = x;
     count++;
     if(start == NULL){
        start = t;
        start->next = NULL;
        printf("%d pushed successfully.\n",x);
        return;
      }
     t->next = start;
     start = t;
     printf("%d pushed successfully.\n",x);
}
void traverse(){
     struct node*t;
     t = start;
     if(t == NULL){
       printf("Stack underflow.\n");
       return ;
     }
   printf("There are %d element in stack.\n",count);
   while(t->next!=NULL){
       printf("%d\n",t->data);
       t = t->next;
     }
      printf("%d\n",t->data);
}
void peek(){
     struct node*temp;
     temp = start;
     if(start == NULL){
     	printf("Stack underflow.\n");
     	return;
     }
     printf("%d \n",temp->data);
}
void pop(){
      struct node*t;
      int n;
     if(start==NULL){
        printf("Stack underflow.\n");
        return;
      }
     n = start->data;
     t = start->next;
     free(start);
     start = t;
     count--;
     if(count <= 0){
     	start = NULL;
     }
     printf("%d poped successfully.\n",n);
}