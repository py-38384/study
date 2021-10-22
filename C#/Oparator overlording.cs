using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace CSharp_Shell
{
	public class Box{
		public int Height;
		public int Width;
		public Box(int H,int W){
			Height = H;
			Width = W;
		}
		public static Box operator+(Box a,Box b){
			int h = a.Height + b.Height;
			int w = a.Width + b.Width;
			Box result = new Box(h,w);
			return result;
		}
		
	}

    public static class Program 
    {
        public static void Main() 
        {
           Box box1 = new Box(13,18);
           Box box2 = new Box(21,26);
           Box box3 = box1 + box2;
           Console.WriteLine("Height = "+box3.Height+",Width = "+box3.Width);
        }
    }
}