#include <iostream>
using namespace std;
class Student{
	public: int id;
	public: string name;
};
int main()
{
	Student obj;
	obj.id = 12;
	obj.name = "Piyal hossein";
	cout << obj.id << endl;
	cout << obj.name << endl;
	return 0;
}