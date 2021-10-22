#include <stdio.h>
int main()
{
    double c, f;
    printf("Enter the temperature in Celsius\n");
    scanf("%lf", &c);
    f = 1.8 * c + 32;
    printf("Temperature in farenheit %0.2lf",f);
    return 0;
}