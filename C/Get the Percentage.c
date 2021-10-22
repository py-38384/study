#include <stdio.h>
int main()
{
	double num1,num2,result;
	printf("Enter number1/_\n");
	scanf("%lf",&num1);
	printf("Enter number2/_\n");
	scanf("%lf",&num2);
	result = (num2/num1)*100;
	printf("Result = %.lf%%",result);
	return 0;
}
