using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{

    public static class Program 
    {
    	static void Swap(ref int num1,ref int num2){
    	       int temp = num1;
    	       num1 = num2;
    	       num2 = temp;
    	}
        public static void Main() 
        {
        	int n1 = 10;
        	int n2 = 20;
        	Console.WriteLine("Num1 = {0},Num2 = {1},",n1,n2);
        	Swap(ref n1,ref n2);
        	Console.WriteLine("Num1 = {0},Num2 = {1},",n1,n2);
           
        }
    }
}