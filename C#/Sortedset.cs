using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{

    public static class Program 
    {
        public static void Main(string[] args){
            var nums = new SortedSet<int>()
            {2,66,85,3,13,97,31,21,45,102,23};
        	foreach(var num in nums){
        	Console.WriteLine(num);
         }
      }
   }
}