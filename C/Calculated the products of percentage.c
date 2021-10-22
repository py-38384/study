#include <stdio.h>
int main()
{
	double num,percent,result;
	printf("Enter the number/_\n");
	scanf("%lf",&num);
	printf("Enter the percentage/_\n");
	scanf("%lf",&percent);
	result = (num*percent)/100;
	printf("Result = %.2lf",result);
	return 0;
}