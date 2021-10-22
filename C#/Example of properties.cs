using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{
	public class Proparties{
		private string name;
		public string Name{
			get{return name;}
			set{name = value;}
		}
	
	}
    public static class Program 
    {
        public static void Main() 
        {
       Proparties obj = new Proparties();
       obj.Name = "Piyal hossein";
       Console.WriteLine(obj.Name);
        }
    }
}