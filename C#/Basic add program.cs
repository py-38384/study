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
           int num1,num2,result;
           Console.WriteLine("Enter number 1/-");
           num1 = Convert.ToInt32(Console.ReadLine());
           Console.WriteLine("Enter Number 2/-");
           num2 = Convert.ToInt32(Console.ReadLine());
           result = num1 + num2;
           Console.WriteLine("Result = {0}",result);
        }
    }
}