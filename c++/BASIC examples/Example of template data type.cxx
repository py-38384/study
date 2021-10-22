#include <iostream>
using namespace std;
template <class T>
T sum(T a,T b){
	return a+b;
}
int main()
{
	int num1 = 45;
	int num2 = 25;
	cout<<sum(num1,num2)<<endl;
	return 0;
}