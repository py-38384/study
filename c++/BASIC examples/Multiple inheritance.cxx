#include <iostream>
using namespace std;
class A{
	public:
	string name;
	void display(){
		cout << name << endl;
	}
	int sub(int num1,int num2){
		return num1-num2;
	}
};
class B{
	public:
	string name;
	void display(){
		cout << name << endl;
	}
	int add(int num1,int num2){
		return num1+num2;
	}
};
class C:public A, public B{
	public:
	string name;
	void display(){
		cout << name << endl;
	}
};
int main(){
	C obj;
    obj.name = "Piyal hossein";
    obj.display();
    cout << obj.add(5,10) << endl;
    cout << obj.sub(10,5) << endl;
    return 0;
}