using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{

    public static class Program 
    {
        public static void Main(string[] args){
            var name = new List<string>();
        	name.Add("Piyal hossein");
        	name.Add("Rakib");
        	name.Add("Minarul");
        	name.Add("Mursalin");
        	name.Add("Foysal");
        	foreach(var names in name){
        	Console.WriteLine(names);
         }
      }
   }
}