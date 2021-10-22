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
           string name;
           Console.WriteLine("Enter your nwme/_");
           name = Console.ReadLine();
           Console.WriteLine("Hi {0}",name);
        }
    }
}