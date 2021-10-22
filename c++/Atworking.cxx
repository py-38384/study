#include <iostream>
using namespace std;
struct Student{
	int ID;
   string name;
   struct Student*next;
};
int main(){
	Student stu;
	stu.ID = 33;
	 struct Student*t;
     t = (struct Student*)malloc(sizeof(struct Student));
     t->ID = 50;
	stu.name = "Piyal hossein";
	cout<<"Student name = "<<stu.name<<"\n"<<"Student ID = "<<stu.ID<<endl;
	cout<<t->ID<<endl;
	return 0;
}