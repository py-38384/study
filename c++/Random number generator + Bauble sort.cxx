#include <iostream>
using namespace std;
int main()
{
	int arr[10],i,j,temp;
	srand(time(0));
	for( i = 0;i <10;i++){	
	  arr[i] = rand()%100;
	}
	cout<<"Before sorting_ _ _\n";
	for( i = 0;i <10;i++){
		cout<<arr[i]<<endl;
	}
	for(i = 1;i < 10;i++){
		for(j = 0;j < (10-i);j++){
			if(arr[j] > arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	cout<<"After sorting_ _ _\n";
	for(i = 0;i < 10;i++){
		cout<<arr[i]<<endl;
	}
	
	return 0;
}