#include<stdio.h>
#include<ctype.h>

char stack[100];
int top = -1;

void push(char x)
{
    stack[++top] = x;
}

char pop()
{
    if(top == -1)
        return -1;
    else
        return stack[top--];
}

int priority(char x)
{
    if(x == '(')
        return 0;
    if(x == '+' || x == '-')
        return 1;
    if(x == '*' || x == '/')
        return 2;
    return 0;
}

int main()
{
    char exp[100],result[100];
    char x;
    int i = 0,j = 0;
    printf("Enter the expression : ");
    scanf("%s",exp);
    printf("\n");
    
    while(exp[j] != '\0')
    {
        if(isalnum(exp[j])){
            result[i] = exp[j];
            i++;
        }
        else if(exp[j] == '(')
            push(exp[j]);
        else if(exp[j] == ')')
        {
            while((x = pop()) != '(')
                result[i] = x;
                i++;
        }
        else
        {
            while(priority(stack[top]) >= priority(exp[j])){
                result[i] = pop();
                i++;
            }
            push(exp[j]);
        }
        j++;
    }
    
    while(top != -1)
    {
       result[i] = pop();
       i++;
    }
    printf("\n%s",result);
    return 0;
}
