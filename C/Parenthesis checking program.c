#include <stdio.h>
struct stack
{
    int top;
    char string[100];
};
void decor1()
{
    printf("--------------------\n");
}
void decor2()
{
    printf("------------------------\n");
}
void push(struct stack *str, char data)
{
    str->top++;
    str->string[str->top] = data;
}
char pop(struct stack *str)
{
    char data;
    if (str->top <= -1)
    {
        return NULL;
    }
    data = str->string[str->top];
    str->top = str->top - 1;
    return data;
}
int isParenthesisMatched(char string[])
{
    int i = 0;
    char data;
    struct stack str;
    str.top = -1;
    while (string[i] != '\0')
    {
        if (string[i] == '(' || string[i] == '{' || string[i] == '[')
        {
            push(&str, string[i]);
        }
        if (string[i] == ')' || string[i] == '}' || string[i] == ']')
        {
            data = pop(&str);
            if (data == '(' && string[i] != ')')
            {
                return 0;
            }
            if (data == '{' && string[i] != '}')
            {
                return 0;
            }
            if (data == '[' && string[i] != ']')
            {
                return 0;
            }
            if (data == NULL)
            {
                return 0;
            }
        }
        i++;
    }
    if (str.top != -1)
    {
        return 0;
    }
    return 1;
}
int main()
{
    char string[100];
    printf("Enter a string with parenthesis/-\n= ");
    scanf("%s", string);
    if (isParenthesisMatched(string))
    {
        decor1();
        printf("Parenthesis matched.\n");
        decor1();
    }
    else
    {
        decor2();
        printf("Parenthesis not matched!\n");
        decor2();
    }
    return 0;
}