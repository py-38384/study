#include <iostream>
using namespace std;
class Animal{
    public:
    string color = "Black";
	void eat(){
		cout<<"Eating..."<<endl;
	}
};
class Dog : public Animal{
	
	public:
	string color = "White";
	void eat(){
		cout<<"hahuahe"<<endl;
	}
};
int main()
{
	Dog dog;
	dog.eat();
	cout<<dog.color;
	
	return 0;
}