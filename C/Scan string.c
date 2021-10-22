#include <stdio.h>
int main ()
{
    char string[100];
    printf("Enter a sentance: ");

    scanf("%[^\n]s", &string);
    printf("%s\n", string);

    return 0;
}