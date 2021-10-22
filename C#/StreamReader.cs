using System;
using System.IO;
namespace FileRead{
	public class main{
	   public static void Main(string[] arg){
	   	FileStream f = new FileStream("/storage/emulated/0/Study/Text.txt",FileMode.OpenOrCreate);
	   	StreamReader s = new StreamReader(f);
	   	int c;
	   	while((c = s.Read()) != -1){
	   		Console.Write((char)c);
	   	}
	   	s.Close();
	   	f.Close();
	   }
	}
}