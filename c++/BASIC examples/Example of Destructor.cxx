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
	int add(){
		return num1+num2;
	}
	~Addon(){
		cout<<"Destructors applied"<<endl;
	}
};
int main()
{
	Addon obj = Addon(30,20);
	cout<<obj.add()<<endl;
	return 0;
}