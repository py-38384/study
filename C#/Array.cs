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
           int[] arr = new int[10];
           for(int i = 0;i < arr.Length;i++){
           	  arr[i] = Convert.ToInt32(Console.ReadLine());
           }
           Console.WriteLine("Array length = "+arr.Length);
           Console.WriteLine("Array dimension = "+arr.Rank);
           Console.WriteLine("Array Max element = "+arr.Max());
           Console.WriteLine("Array Minimum element ="+arr.Min());
           Console.WriteLine("Array Sum = "+arr.Sum());
           Console.WriteLine("Array/_ _ _");
           for(int i = 0;i < arr.Length;i++){
           	  Console.WriteLine(arr[i]);
           }
        }
    }
}