#include <iostream>  
#include <fstream>  
using namespace std;  
int main () {  
  string srg;  
  ifstream filestream("/storage/emulated/0/New file.txt");  
  if (filestream.is_open())  
  {  
    while ( getline (filestream,srg) )  
    {  
      cout << srg <<endl;  
    }
    filestream.close();  
  }  
  else {  
      cout << "File opening is fail."<<endl;   
    }  
  return 0;  
}  