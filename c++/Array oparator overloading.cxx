#include<iostream> 
using namespace std;

class TestClass {
private:
    int size = 0;
	int arr[50];
public:
    void add(int num){
    	arr[size] = num;
    	size++;
    }

	TestClass operator + (TestClass &obj) {
		TestClass result;
		int n = 0;
		for(int i = 0;i < size;i++){
	       	result.arr[i] = arr[i];
	       	n++;
	       	result.size++;
		}
		for(int i = 0;i < obj.size;i++){
		       result.arr[i+n] = obj.arr[i];
		       result.size++;
		}
	   
		return result;
	}
	void print() {
		for(int i = 0;i < size;i++){
		cout << arr[i] << endl;
	   }
	}
};
int main()
{
	TestClass obj1,obj2,obj3;
	obj1.add(10);obj1.add(20);obj1.add(30);
	obj2.add(40);obj2.add(50);obj2.add(60);
	obj3 = obj1 + obj2;
	obj3.print();
	cout<<"--------"<<endl;
	obj1.print();
	cout<<"--------"<<endl;
	obj2.print();
	
	return 0;
}