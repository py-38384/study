using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{
  public static class Program{
	static void swap<T>(ref T a,ref T b){
		T temp = a;
		a = b;
		b = temp;
	}
        public static void Main() 
        {
           int num1 = 25;
           int num2 = 30;
           Console.WriteLine("Before/-");
           Console.WriteLine("Number1 = {0},Number2 = {1}",num1,num2);
           swap<int>(ref num1,ref num2);
           Console.WriteLine("After/-");
           Console.WriteLine("Number1 = {0},Number2 = {1}",num1,num2);
           string name1 = "Piyal";
           string name2 = "Mursalin";
           Console.WriteLine("Before/-");
           Console.WriteLine("{0} {1}",name1,name2);
           swap(ref name1,ref name2);
           Console.WriteLine("After/-");
           Console.WriteLine("{0} {1}",name1,name2);
        }
    }
}