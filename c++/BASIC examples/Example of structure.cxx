#include <iostream>  
using namespace std;  
 struct Rectangle    
{    
  public: int width, height;    
   Rectangle(int i,int j){
   	this->width = i;
   	this->height = j;
   }
  void areaOfRectangle() {     
    cout<<"Area of Rectangle is: "<<(width*height);
    }
};
int main(void) {  
    struct Rectangle rec = Rectangle(4,5);
    rec.areaOfRectangle();  
    return 0;  
}  