#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node *createNode(int data)
{
    struct node *n;
    n = (struct node *)malloc(sizeof(struct node));
    n->data = data;
    n->left = NULL;
    n->right = NULL;
    return n;
}

void preOrder(struct node *root)
{
    if (root != NULL)
    {
        printf("%d ", root->data);
        preOrder(root->left);
        preOrder(root->right);
    }
}
void postOrder(struct node *root)
{
    if (root != NULL)
    {
        preOrder(root->left);
        preOrder(root->right);
        printf("%d ", root->data);
    }
}
void inOrder(struct node *root)
{
    if (root != NULL)
    {
        preOrder(root->left);
        printf("%d ", root->data);
        preOrder(root->right);
    }
}
int isBST(struct node *root)
{
    static struct node *prev = NULL;
    if (root != NULL)
    {
        if (!isBST(root->left))
        {
            return 0;
        }
        if (prev != NULL && root->data <= prev->data)
        {
            return 0;
        }
        prev = root;
        return isBST(root->right);
    }
    else
    {
        return 1;
    }
}
struct node *search(struct node *root, int num)
{
    if (root == NULL)
    {
        return NULL;
    }
    if (root->data == num)
    {
        return root;
    }
    else if (num < root->data)
    {
        return root->left;
    }
    else
    {
        return root->right;
    }
}
struct node *searchIter(struct node *root, int num)
{
    while (root != NULL)
    {
        if (root->data == num)
        {
            return root;
        }
        else if (root->data > num)
        {
            root = root->left;
        }
        else
        {
            root = root->right;
        }
    }
    return NULL;
}
struct node *insert(struct node *root, int num)
{
    struct node *prev;
    while (root != NULL)
    {
        prev = root;
        if (root->data == num)
        {
            printf("Can't enter this value!\n");
            return NULL;
        }
        else if (root->data > num)
        {
            root = root->left;
        }
        else
        {
            root = root->right;
        }
    }
    struct node *newnode = createNode(num);
    if (newnode->data > prev->data)
    {
        prev->right = newnode;
    }
    else
    {
        prev->left = newnode;
    }
    printf("%d insertion successful.\n", num);
}
struct node *inorderPredecessor(struct node *root)
{
    root = root->left;
    while (root->right != NULL)
    {
        root = root->right;
    }
    return root;
}
struct node *deleteNode(struct node *root, int num)
{
    struct node *iPre;
    if (root == NULL)
    {
        return NULL;
    }
    if (root->left == NULL && root->right == NULL && root->data == num)
    {
        free(root);
        return NULL;
    }
    if (root->data > num)
    {
        root->left = deleteNode(root->left, num);
    }
    else if (root->data < num)
    {
        root->right = deleteNode(root->right, num);
    }
    else
    {
        iPre = inorderPredecessor(root);
        root->data = iPre->data;
        root->left = deleteNode(root->left, iPre->data);
    }
    return root;
}
int main()
{
    // Constructing the root node - Using Function (Recommended)
    struct node *p = createNode(5);
    struct node *p1 = createNode(3);
    struct node *p2 = createNode(6);
    struct node *p3 = createNode(1);
    struct node *p4 = createNode(4);
    // Finally The tree looks like this:
    //      5
    //     / \
    //    3   6
    //   / \
    //  1   4

    // Linking the root node with left and right children
    p->left = p1;
    p->right = p2;
    p1->left = p3;
    p1->right = p4;

    insert(p, 10);
    insert(p, 2);

    // preOrder(p);
    // printf("\n");
    // postOrder(p);
    // printf("\n");
    inOrder(p);
    printf("\n");
    deleteNode(p, 5);
    inOrder(p);
    printf("\n");
    //printf("%d", isBST(p));
    if (isBST(p))
    {
        printf("This is a binary search tree.\n");
    }
    else
    {
        printf("This is not a binary search tree!\n");
    }

    struct node *n = searchIter(p, 2);
    if (n == NULL)
    {
        printf("Element not found!\n");
    }
    else
    {
        printf("%d found", n->data);
    }

    return 0;
}