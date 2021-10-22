using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{

    public static class Program 
    {
        public static void Main() 
        {
           var num1 = 9;
           var num2 = 13;
           if(num1 > num2){
           	Console.WriteLine("Num1 is bigger then Num2.");
           }
           else{
           	Console.WriteLine("Num1 is smaller then Num2.");
           }
        }
    }
}