#include <iostream>
using namespace std;
template <class T>
class MyClass{
	public:
    void myclass(T x){
    	cout<<x<<" is not a char type."<<endl;
    }
};
template < >
class MyClass<char>{
	public:
	void myclass(char x){
		cout<<x<< " is a char type."<<endl;
	}
};
int main()
{
	char n = 'P';
	int num = 16;
	MyClass<int>obj;
	MyClass<char>obj1;
	obj1.myclass(n);
	obj.myclass(num);
	
	return 0;
}