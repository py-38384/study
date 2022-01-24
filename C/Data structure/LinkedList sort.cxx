#include <stdio.h>
#include <stdlib.h>

struct node
{
	struct node *previous;
	int data;
	struct node *next;
};

struct node *head = NULL, *tail = NULL;
int count = 0;
void insert_at_beginning(int value)
{
	struct node *newnode;
	newnode = (struct node *)malloc(sizeof(struct node));
	newnode->data = value;
	newnode->previous = NULL;
	count++;
	if (head == NULL)
	{
		newnode->previous = NULL;
		newnode->next = NULL;
		head = newnode;
		tail = newnode;
		printf("%d insertion successful.\n", value);
		return;
	}
	else
	{
		newnode->next = head;
		head->previous = newnode;
		head = newnode;
	}
	printf("%d insertion successful.\n", value);
}
void insert_at_end(int value)
{
	struct node *newnode;
	newnode = (struct node *)malloc(sizeof(struct node));
	newnode->data = value;
	newnode->next = NULL;
	count++;
	if (head == NULL)
	{
		newnode->previous = NULL;
		newnode->next = NULL;
		tail = head = newnode;
		//printf("%d inertion successful.\n", value);
		return;
	}
	newnode->previous = tail;
	tail->next = newnode;
	tail = newnode;
	//printf("%d insertion successful.\n", value);
}
void insert_after(int value, int pos)
{
	int i;
	struct node *newnode, *temp1 = head, *temp2;
	newnode = (struct node *)malloc(sizeof(struct node));
	newnode->data = value;
	if (head == NULL || pos >= count || pos == 1)
	{
		printf("Error!!can't enter at this position.\n");
		free(newnode);
		return;
	}
	count++;
	for (i = 0; i < pos - 2; i++)
	{
		temp1 = temp1->next;
	}
	temp2 = temp1->next;
	newnode->previous = temp1;
	temp1->next = newnode;
	newnode->next = temp2;
	temp2->previous = newnode;
	printf("%d insertion at %d position successful.\n", value, pos);
}

void traverse()
{
	struct node *temp;
	temp = head;
	if (temp == NULL)
	{
		printf("No element in the list.\n");
		return;
	}
	printf("There are %d element in the list.\n", count);
	while (temp->next != NULL)
	{
		printf("%d \n", temp->data);
		temp = temp->next;
	}
	printf("%d \n", temp->data);
}
void reverse_traverse()
{
	struct node *temp;
	temp = tail;
	if (temp == NULL)
	{
		printf("No element in the list.\n");
		return;
	}
	printf("There are %d element in the list.\n", count);
	while (temp->previous != NULL)
	{
		printf("%d \n", temp->data);
		temp = temp->previous;
	}
	printf("%d \n", temp->data);
}
void delete_from_beginning()
{
	int n;
	if (head == NULL)
	{
		printf("List is Empty.\n");
		return;
	}
	count--;
	if (count == 0)
	{
		printf("%d deletion successful.\n", head->data);
		free(head);
		head = NULL;
		tail = NULL;
		return;
	}
	struct node *temp = head;
	n = temp->data;
	head = head->next;
	head->previous = NULL;
	free(temp);
	printf("%d deletion successful.\n", n);
}
void delete_from_end()
{
	if (head == NULL)
	{
		printf("List is Empty.\n");
		return;
	}
	count--;
	if (count == 0)
	{
		printf("%d deletion successful.\n", head->data);
		free(head);
		head = NULL;
		tail = NULL;
		return;
	}
	struct node *temp = tail;
	int n = tail->data;
	tail = tail->previous;
	tail->next = NULL;
	free(temp);
	printf("%d deletion successful.\n", n);
}
void delete_at_specific(int delvalue)
{
	if (head == NULL || delvalue == count || delvalue == 1)
	{
		printf("Error!!List is empty or you trying to delete data from wrong position\n");
		return;
	}
	count--;
	struct node *temp = head;
	struct node *x;
	for (int i = 0; i < delvalue - 1; i++)
	{
		temp = temp->next;
	}
	int n = temp->data;
	x = temp->previous;
	x->next = temp->next;
	x = temp->next;
	x->previous = temp->previous;
	free(temp);
	printf("%d from position of %d deletion successful.\n", n, delvalue);
}

struct node *sort()
{
	struct node *tempHead = head;
	struct node *temp = head;
	struct node *min = temp;
	int n;
	for (int i = 0; i < count - 1; i++)
	{
		while (temp != NULL)
		{
			if (temp->data < min->data)
			{
				min = temp;
			}
			temp = temp->next;
		}
		n = min->data;
		min->data = tempHead->data;
		tempHead->data = n;

		tempHead = tempHead->next;
		temp = tempHead;
		min = temp;
	}

	return tempHead;
}

int main()
{
	insert_at_end(17);
	insert_at_end(25);
	insert_at_end(12);
	insert_at_end(47);
	insert_at_end(82);
	insert_at_end(40);
	traverse();
	sort();
	traverse();
	return 0;
}