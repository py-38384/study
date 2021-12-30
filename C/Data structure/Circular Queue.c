#include <stdio.h>
struct circulerQueue
{
    int front;
    int flag;
    int rear;
    int count;
    int arr[10];
};
void enqueue(struct circulerQueue *ptr, int data)
{
    if (ptr->count >= 10)
    {
        printf("Queue overflow!!\n");
        return;
    }
    if (ptr->flag == 0)
    {
        ptr->rear = 0;
        ptr->flag = 1;
    }
    ptr->front = (ptr->front + 1) % 10;
    ptr->arr[ptr->front] = data;
    ptr->count++;
    printf("%d enqueue successful.\n", data);
}
int dequeue(struct circulerQueue *ptr)
{
    if (ptr->count <= 0)
    {
        printf("Queue underflow!!\n");
        ptr->flag = 0;
        ptr->rear = -1;
        ptr->front = -1;
        return NULL;
    }
    int data = ptr->arr[ptr->rear];
    ptr->rear = (ptr->rear + 1) % 10;
    ptr->count--;
    printf("%d dequeue successful.\n", data);
    return data;
}
void peekAll(struct circulerQueue *ptr)
{
    if (ptr->count <= 0)
    {
        printf("Queue is empty!!\n");
        return;
    }
    int i = ptr->rear, j = 0;
    printf("Showing all element of the queue/-\n");
    while (j < ptr->count)
    {
        printf("%d\n", ptr->arr[i]);
        i = (i + 1) % 10;
        j++;
    }
}
int main()
{
    struct circulerQueue queue;
    queue.front = -1;
    queue.rear = -1;
    queue.flag = 0;
    queue.count = 0;
    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);
    enqueue(&queue, 40);
    enqueue(&queue, 50);
    enqueue(&queue, 60);
    enqueue(&queue, 70);
    enqueue(&queue, 80);
    enqueue(&queue, 90);
    enqueue(&queue, 100);
    enqueue(&queue, 110);
    dequeue(&queue);
    dequeue(&queue);
    dequeue(&queue);
    dequeue(&queue);
    dequeue(&queue);
    dequeue(&queue);
    enqueue(&queue, 120);
    enqueue(&queue, 130);
    enqueue(&queue, 140);
    enqueue(&queue, 150);
    enqueue(&queue, 160);
    enqueue(&queue, 170);
    enqueue(&queue, 180);
    enqueue(&queue, 190);
    enqueue(&queue, 200);
    dequeue(&queue);
    enqueue(&queue, 210);
    peekAll(&queue);
    return 0;
}