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
           int age = 34;
           string msg;
           msg = (age >= 18)?"Walcome":"Sorry";
           Console.WriteLine(msg);
        }
    }
}