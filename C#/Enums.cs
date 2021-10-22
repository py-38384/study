using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{

    public static class Program 
    {
    	enum days{sun,mon,tue,wed,thu,fri,sat};
        public static void Main() 
        {
           int x = (int)days.fri;
           Console.WriteLine(x);
        }
    }
}