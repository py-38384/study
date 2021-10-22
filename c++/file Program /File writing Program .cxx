#include <iostream>
#include <fstream>
using namespace std;
int main()
{
	ofstream filedriver("/storage/emulated/0/New file.txt",ios::out);
	string file = "my name is piyal.\n";
	filedriver<<file;
	filedriver.close();
	return 0;
}