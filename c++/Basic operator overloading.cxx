#include <iostream>  
using namespace std;  
class Test  
{  
   private:  
      int num;  
   public:  
       Test(){
       	 num = 8;
         }  
       Test operator ++(){   
          num = num+3;   
       }  
       void operator --(){
       	num -= 1;
       }
       void Print() {   
           cout<<"The Count is: "<<num<<endl;   
       }  
};  
int main()  
{  
    Test tt;  
    ++tt;
    tt.Print();
     --tt;
    tt.Print();  
    return 0;  

}  