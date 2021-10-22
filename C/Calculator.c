#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
int main()
{
	long double num1, num2;
	bool flag = true;
	char Case,c;
	while(1){
	 line1:
	 if(flag){
	         
       scanf("%Lf %c %Lf",&num1, &Case,&num2);
	 }
	 else{
	   
	   scanf("%c %Lf",&Case,&num2);
	 }
	system("clear");
	switch (Case){
	 	case '+' :
	 	
         num1= num1+num2;
		 printf("%.3Lf",num1);
		 flag = false;
		 break;
		 
	   case '-' :
		 
		 num1=num1-num2;
		 printf("%.3Lf",num1);
		 flag = false;
		 break;
		 
		 case '*' :
		
		 num1=num1*num2;
		 printf("%.3Lf",num1);
		 flag = false;
		 break;
		 
		 case '/' :
		 
		 num1=num1/num2;
		 printf("%.3Lf",num1);
		 flag = false;
		 break;
     
     }
}
   return 0;
}		 
