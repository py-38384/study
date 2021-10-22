using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{
	public class Animal{
		protected int legs;
		protected int eye;
		public virtual void eat(){
			Console.WriteLine("Animal need to eat.");
		}
	}
	public class Human:Animal{
	    public String name;
	    public Human(string name){
	    	this.name = name;
	    }
		public override void eat(){
			Console.WriteLine("{0} need to Cook before Eat",name);
	  }
	}

    public static class Program 
    {
        public static void Main() 
        {
           Animal Piyal = new Human("Piyal");
           Piyal.eat();
        }
    }
}