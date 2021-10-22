using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{
	public class Class{
		private const double Pi = 3.1416;
		private int result;
		public Class(int result = 10){
			this.result = result;
		}
	    public double getPi(){
	    	return Pi;
	    }
	    public int getresult(){
	    	return result;
	    }
		
	}

    public static class Program 
    {
        public static void Main() 
        {
           Class obj1 = new Class();
           Console.WriteLine(obj1.getPi()+"\n"+obj1.getresult());
           Class obj2 = new Class(20);
           Console.WriteLine(obj2.getPi()+"\n"+obj2.getresult());
        }
    }
}