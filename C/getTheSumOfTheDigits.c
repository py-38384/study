#include <stdio.h>
int get_the_sum_of_digits(long long int num);
int main()
{
	long long int user_input;
	int sum;
	printf("Enter the number/-\n");
	scanf("%lld",&user_input);
	sum = get_the_sum_of_digits(user_input);
	printf("The total sum of digit = %d\n",sum);
	return 0;
}
int get_the_sum_of_digits(long long int num){
	int sum = 0;
	int last_digit = 0;
	while(num > 0){
		last_digit = num%10;
		sum+=last_digit;
		num = num/10;
	}
	return sum;
}