#include <iostream>
using namespace std;
class Addon{
	public:
	int num1;
	int num2;
	Addon(int num1,int num2){
		this->num1 = num1;
		this->num2 = num2;
		cout<<"Constructors applied"<<endl;
	}
	int add()const{
		return num1+num2;
	}
	int sub(){
		return num1-num2;
	}
	~Addon(){
		cout<<"Destructors applied"<<endl;
	}
};
int main()
{
	const Addon obj = Addon(30,20);
	Addon obj2 = Addon(50,30);
	cout<<obj.add()<<endl;
	obj2.num1 = 40;
	cout<<obj2.sub()<<endl;
	return 0;
}