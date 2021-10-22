#include <iostream>  
using namespace std;  
class Account {  
   public:  
       int accno;
       string name; 
       static float rateOfInterest;
       static int count;
       Account(int accno, string name)   
        {    
             this->accno = accno;    
            this->name = name;    
            count++;
        }
       void display()
        {
            cout<<accno<< " "<<name<< "  "<<rateOfInterest<<endl;
        }
};  
float Account::rateOfInterest = 1.9;
int Account::count = 0;
int main(void) {  
    Account a1 =Account(201, "Sanjay");    
    Account a2=Account(202, "Nakul"); 
    a1.display();    
    a2.display();    
     cout << "Total object are " << Account::count;
    return 0;  

}  