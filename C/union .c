#include <stdio.h>
#include <string.h>
union student{
	char name[10];
	int roll;
	
};
int main()
{
	union student s1,s2;
	s1.roll = 12;
	printf("%d\n",s1.roll);
	gets(s1.name);
	s2.roll = 21;
	printf("%d\n",s2.roll);
	gets(s2.name);
	printf("%s\n",s1.name);
	printf("%d\n",s1.roll);
	printf("%s\n",s2.name);
	printf("%d\n",s2.roll);
	return 0;
}