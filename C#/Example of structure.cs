using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{
	struct Book{
		public string name;
		public double Price;
		public int id;
	}

    public static class Program 
    {
        public static void Main() 
        {
           Book book1;
           book1.name = "C# Programing";
           book1.Price = 40;
           book1.id = 24;
           Console.WriteLine(book1.name);
        }
    }
}