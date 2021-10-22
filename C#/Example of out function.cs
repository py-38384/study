using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{

    public static class Program 
    {
    	static void Set(out string nam){
    	    nam = "Piyal hossein";
    	}
        public static void Main() 
        {
           string name;
           Set(out name);
           Console.WriteLine("Name = {0}",name);
        }
    }
}