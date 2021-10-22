using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{

    public class Class{
    	public int data;
    	public Class(int data){
    		this.data = data;
    	}
    	public int product(){
    		return data*data;
    	}
    }
    public static class Program 
    {
        public static void Main() 
        {
        	Class obj = new Class(23);
        	Console.WriteLine(obj.product());
        }
    }
}