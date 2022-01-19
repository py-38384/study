#include <stdio.h>
#include <stdlib.h>

struct Node
{
	int key;
	struct Node *left;
	struct Node *right;
	int height;
};

int getHeight(struct Node *n)
{
	if (n == NULL)
		return 0;
	return n->height;
}

struct Node *createNode(int key)
{
	struct Node *node = (struct Node *)malloc(sizeof(struct Node));
	node->key = key;
	node->left = NULL;
	node->right = NULL;
	node->height = 1;
	return node;
}

int max(int a, int b)
{
	return (a > b) ? a : b;
}

int getBalanceFactor(struct Node *n)
{
	if (n == NULL)
	{
		return 0;
	}
	return getHeight(n->left) - getHeight(n->right);
}

struct Node *rightRotate(struct Node *y)
{
	struct Node *x = y->left;
	struct Node *T2 = x->right;

	x->right = y;
	y->left = T2;

	x->height = max(getHeight(x->right), getHeight(x->left)) + 1;
	y->height = max(getHeight(y->right), getHeight(y->left)) + 1;

	return x;
}

struct Node *leftRotate(struct Node *x)
{
	struct Node *y = x->right;
	struct Node *T2 = y->left;

	y->left = x;
	x->right = T2;

	x->height = max(getHeight(x->right), getHeight(x->left)) + 1;
	y->height = max(getHeight(y->right), getHeight(y->left)) + 1;

	return y;
}

struct Node *insert(struct Node *node, int key)
{
	if (node == NULL)
		return createNode(key);

	if (node->key > key)
		node->left = insert(node->left, key);
	else if (node->key < key)
		node->right = insert(node->right, key);

	node->height = 1 + max(getHeight(node->right), getHeight(node->left));
	int bf = getBalanceFactor(node);

	//left left case
	if (bf > 1 && node->left->key > key)
	{
		return rightRotate(node);
	}
	//right right case
	else if (bf < -1 && node->right->key < key)
	{
		return leftRotate(node);
	}
	//left right case
	else if (bf > 1 && node->left->key < key)
	{
		node->left = leftRotate(node->left);
		return rightRotate(node);
	}
	//right left case
	else if (bf < -1 && node->right->key > key)
	{
		node->right = rightRotate(node->right);
		return leftRotate(node);
	}
	return node;
}

struct Node *inorderPredecessor(struct Node *root)
{
	root = root->left;
	while (root->right != NULL)
	{
		root = root->right;
	}
	return root;
}

struct Node *deleteNode(struct Node *root, int data)
{
	struct Node *iPre;
	if (root == NULL)
	{
		return NULL;
	}
	if (root->left == NULL && root->right == NULL && root->key == data)
	{
		free(root);
		return NULL;
	}
	if (root->key > data)
	{
		root->left = deleteNode(root->left, data);
	}
	else if (root->key < data)
	{
		root->right = deleteNode(root->right, data);
	}
	else
	{
		iPre = inorderPredecessor(root);
		root->key = iPre->key;
		root->left = deleteNode(root->left, root->key);
	}
	return root;
}

void preOrder(struct Node *n)
{
	if (n != NULL)
	{
		printf("%d ", n->key);
		preOrder(n->left);
		preOrder(n->right);
	}
}

void inOrder(struct Node *n)
{
	if (n != NULL)
	{
		preOrder(n->left);
		printf("%d ", n->key);
		preOrder(n->right);
	}
}

void postOrder(struct Node *n)
{
	if (n != NULL)
	{
		preOrder(n->left);
		preOrder(n->right);
		printf("%d ", n->key);
	}
}

int main()
{
	struct Node *root = NULL;
	int choice, data;
	while (1)
	{
		printf("_______Enter_______\n");
		printf("1 for insert data.\n");
		printf("2 for delete data. \n");
		printf("3 for traverse data. \n");
		printf("0 for terminate the program. \n");
		scanf("%d", &choice);
		switch (choice)
		{
		case 1:
			printf("Enter the data/-\n");
			scanf("%d", &data);
			root = insert(root, data);
			break;
		case 2:
			printf("Enter the data for deletion/-\n");
			scanf("%d", &data);
			root = deleteNode(root, data);
			break;
		case 3:
			printf("Enter 1 for preorder.\nEnter 2 for inorder.\nEnter 3 for postorder.\n");
			scanf("%d", &data);
			switch (data)
			{
			case 1:
				preOrder(root);
				printf("\n");
				break;
			case 2:
				inOrder(root);
				printf("\n");
				break;
			case 3:
				postOrder(root);
				printf("\n");
				break;
			}
			break;
		case 0:
			break;
		}
		if (choice < 0)
		{
			break;
		}
	}
	return 0;
}