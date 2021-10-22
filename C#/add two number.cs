using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{

    public static class Program 
    {
    	static int Addtwo(int num1,int num2){
    		int result;
    		result = num1 + num2;
    		return result;
    	}
        public static void Main() 
        {
           Console.WriteLine("Enter Number1/-");
           int number1 = Convert.ToInt32(Console.ReadLine());
           Console.WriteLine("Enter Number2/-");
           int number2 = Convert.ToInt32(Console.ReadLine());
           Console.WriteLine("Result = {0}",Addtwo(num2:number2,num1:number1));
        }
    }
}