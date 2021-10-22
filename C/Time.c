#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <unistd.h>

int main()
{

    int hour, minute, second;
    char a;
    second = 0;

    printf("Plz inter the time/_ _\n");
    scanf("%d %d %c",&hour,&minute,&a);

    while(1){
 
       system("clear");

       if(a=='A'&&hour<12){
       printf("%02d:%02d:%02dAM\n",hour,minute,second);
      
      }
       else if(a=='P'&&hour<12){
       printf("%02d:%02d:%02dPM\n",hour,minute,second);
       
      }
       else if(a=='A'&&hour>12){
       printf("%02d:%02d:%02dPM\n",hour-12,minute,second);
      
      }
       else if(a=='P'&&hour>12){
       printf("%02d:%02d:%02dAM\n",hour-12,minute,second);

      }
       else if(a=='A'&&hour==12){
       printf("12:%02d:%02dPM\n",minute,second);

      }
       else if(a=='P'&&hour==12){
       printf("12:%02d:%02dAM\n",minute,second);

       }

       fflush(stdout);
      
       
       second++;
       if(second==60){
         minute+=1;
         second=0;
       }
     
       if(minute==60){
         hour+=1;
         minute=0;
       }
       
       if(hour==24){
         hour=0;
         minute=0;
         second=0;
       }

     sleep(1);
    
}
return 0;
}
