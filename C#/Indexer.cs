using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{
	public class Class{
		private string[] name = new string[20];
		public string this[int index]{
			get{
				return name[index];
			}
			set{
				name[index] = value;
			}
		}
	}

    public static class Program 
    {
        public static void Main() 
        {
        	Class obj = new Class();
            obj[0] = "Piyal";
            obj[1] = "Rakib";
            obj[2] = "Minarul";
            Console.WriteLine(obj[1]);
        }
    }
}