using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{
	enum Traficligth{Green,Red,Yello};

    public static class Program 
    {
        public static void Main() 
        {
           Traficligth x = Traficligth.Red;
           switch(x){
           	case Traficligth.Green:
           	     Console.WriteLine("You can go.");
           	     break;
           	case Traficligth.Red:
           	     Console.WriteLine("Stop right there.");
           	     break;
           	case Traficligth.Yello:
           	     Console.WriteLine("Be ready for go");
           	     break;
          }
       }
    }
}