#include <iostream>  
using namespace std;  
class Box  
{  
      private:
      int length;  
      public:
      Box(int length){
      	this->length = length;
      }
      friend void printLength(Box a);
};  
void printLength(Box a)  
{  
    a.length = 10;  
    cout<<a.length<<endl;
}  
int main()  
{  
    Box b = Box(20);
   printLength(b);
    return 0;  
}  