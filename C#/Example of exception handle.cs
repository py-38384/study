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
          try{
           int num1 = 34;
           int num2 = 0;
           int result = num1/num2;
           Console.WriteLine(result);
          }catch(DivideByZeroException e){
          	Console.WriteLine(e.Message);
          }
        }
    }
}