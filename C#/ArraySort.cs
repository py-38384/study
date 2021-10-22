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
        	int[] arr = new int[10] {35,76,22,65,33,58,14,57,53,74};
        	Console.WriteLine("Array/_ _ _");
        	for(int i = 0;i < arr.Length;i++){
        		Console.WriteLine(arr[i]);
            }
            Array.Sort(arr);
            Console.WriteLine("Sorted Array/_ _ _");
            for(int i = 0;i < arr.Length;i++){
           	    Console.WriteLine(arr[i]);
           }
        }
    }
}