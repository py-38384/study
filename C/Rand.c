#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int p;
    int s;
    long l;
    
    l = time(NULL);
    s = (unsigned)l;
    srand(s);
    
    p = rand()%100;
  
    printf("Random number = %d",p);
    return 0;
}