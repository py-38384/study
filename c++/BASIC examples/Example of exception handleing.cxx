#include <iostream>
using namespace std;
int main()
{
	int num1;
	int num2;
	try{
		cout<<"Enter the number 1."<<endl;
		cin>>num1;
		cout<<"Enter the number 2."<<endl;
		cin>>num2;
		if(num2 == 0){
			throw 0;
		}
		cout<<"Result : "<<(num1/num2)<<endl;
	}catch(...){
		cout<<"Division by zero."<<endl;
	}
}