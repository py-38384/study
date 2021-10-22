#include <iostream>  
using namespace std;  
class Student {  
   public:  
       int id;    
       string name; 
       int age;
      Student(int i, string n,int x){
            id = i;    
            name = n;    
            age = x;
        }    
       void display()    
        {    
            cout<<id<<"  "<<name<<" "<<age<<endl;    
        }    
};  
int main(void) {  
    Student s1 = Student(12,"Piyal", 18);
    Student s2 = Student(15,"Rakib",17);
    s1.display();    
    s2.display();  
    return 0;  
}  