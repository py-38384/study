using System;  
    using System.IO;  
    public class StreamWriterExample  
    {  
        public static void Main(string[] args)  
        {  
        	string data;
        	int flag = 1,choice;
            FileStream f = new FileStream("/storage/emulated/0/Text.txt",FileMode.Append);  
            StreamWriter s = new StreamWriter(f);  
          while(true){
          	Console.WriteLine("Enter line{0}/_",flag);
          	data = Console.ReadLine() + ("\n");
            s.Write(data);
            flag++;
            Console.WriteLine("Enter 1 for more line.\n0 for save the file.");
            choice = Convert.ToInt16(Console.ReadLine());
            if(choice == 0){
            	break;
            }
          }
            s.Close();  
            f.Close();  
         Console.WriteLine("File created successfully...");  
     }  
 }  