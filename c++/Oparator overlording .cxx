#include<iostream> 
using namespace std;

class TestClass {
private:
	int real, over;
public:
    TestClass(){};
    TestClass(int real ,int over){
    	this->real = real;
    	this->over = over;
    }

	TestClass operator + (TestClass &obj) {
		TestClass result;
		result.real = over + obj.real;
		result.over = real + obj.over;
		return result;
	}
	void print() {
		cout << real << " + " << over << endl;
	}
};
int main()
{
	TestClass obj1(5,7);
	TestClass obj2(3,10);
	TestClass obj3;
	obj3 = obj1 + obj2;
	obj3.print();
	
	return 0;
}