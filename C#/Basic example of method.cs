using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{

    public static class Program 
    {
        static int dobol(int num){
    		int result;
    		result = num + num;
    		return result;
    	}
        public static void Main() 
        {
           Console.WriteLine("Enter a Number/-");
           int number = Convert.ToInt32(Console.ReadLine());
           Console.WriteLine("Result = {0}",dobol(number));
        }
    }
}