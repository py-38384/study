#include <stdio.h>
void add(int num);
int main()
{
	void (*fp)(int);
	fp = add;
	fp(10);
}
void add(int num){
	printf("%d",num+10);
}