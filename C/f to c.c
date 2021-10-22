#include <stdio.h>
int main()
{
    double c, f;
    printf("Enter the temperature in farenheit\n");
    scanf("%lf", &f);
    c = (f - 32) / 1.8;
    printf("Temperature in Celsius %0.2lf",c);
    return 0;
}