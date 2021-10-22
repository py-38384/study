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
           string name = "Piyal hossein";
           Console.WriteLine("Example String = "+name);
           Console.WriteLine("Length of String = "+name.Length);
           Console.WriteLine("Index of 'o' = "+name.IndexOf('o'));
           name = name.Insert(0,"MD ");
           Console.WriteLine("Insert (MD) in index 0 = "+name);
           name = name.Replace("Piyal","Rakib");
           Console.WriteLine("Replaceing piyal = "+name);
           if(name.Contains("MD")){
           	Console.WriteLine("Found MD");
           }
           name = name.Remove(8);
           Console.WriteLine("Remove MD Rakib = "+name);
           name = name.Substring(2);
           Console.WriteLine("Substring of MD Rakib = "+name);
        }
    }
}