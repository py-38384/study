using System;  
    using System.IO;  
    using System.Runtime.Serialization.Formatters.Binary;  
    namespace Piyal1{
    [Serializable]  
    public class Student  
    {  
        public int rollno;  
        public string name;  
        public Student(int rollno, string name)  
        {  
            this.rollno = rollno;  
            this.name = name;  
        }  
    } 
	
    public class SerializeExample  
    {  
        public static void Main(string[] args)  
        {  
            FileStream stream = new FileStream("/storage/emulated/0/Serialization.Sr",FileMode.OpenOrCreate);  
            BinaryFormatter formatter=new BinaryFormatter();  
              
            Student s = new Student(10, "Piyal");  
            formatter.Serialize(stream, s);  
            
            Console.WriteLine("Serialization complete");
            stream.Close();  
        }  
    }  
}