using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{
	class genericClass<T>{
		public T Field;
		public genericClass(T x){
			Field = x;
		}
		public T getProduct(){
			return Field;
		}
	}
    public static class Program 
    {
        public static void Main() 
        {
        	genericClass<int>obj = new genericClass<int>(23);
            Console.WriteLine(obj.Field);
        }
    }
}