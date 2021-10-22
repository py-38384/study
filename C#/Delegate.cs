using System;
delegate int Cal(int n1,int n2);
public class main{
	public static int add(int n1,int n2){
		return n1+n2;
	}
	public static void Main(string[] args){
		Cal obj = new Cal(add);
		Console.WriteLine(obj(20,30));
	}
	
}