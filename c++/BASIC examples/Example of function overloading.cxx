#include <iostream>
using namespace std;
class Add{
	private:
	
	int result;
	
	public:
	void add(int a,int b){
		result = a + b;
	}
	void show(){
		cout<<"result = "<<result<<endl;
	}
	void add(int a,int b,int c){
	    result = a + b + c;
	}
};
class Sum:public Add{
	private:
	
	float result;
	
	public:
	void adds(int a,int b,float c){
		result = a + b + c;
	}
	void show2(){
		cout<<"result = "<<result<<endl;
	}
};
int main()
{
	Sum a;
	a.add(3,4,3);
	a.adds(24,7,3.466);
	a.show();
	a.show2();
	
	return 0;
	
}