#include <iostream>  

using namespace std;  

namespace First{  

 class example1{
   public:
  static void sayHello(){  

      cout << "Hello First Namespace Class" << endl;  

   }  

};
 class example2{
   public:
   static void sayHello(){  

      cout << "Hello Second Namespace Class" << endl;  

   }  

};
}
using namespace First;
int main () {  
  example1::sayHello();
  example2::sayHello();
   return 0;  

}  