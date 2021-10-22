#include <stdio.h>
#include <math.h>
int main()
{
	float  num;
	double result;
	printf("Enter the number/_\n");
	scanf("%f",&num);
	result = sqrt(num);
	printf("SqureRoot of %.3f = %.15lf\n",num,result);
	return 0;
}