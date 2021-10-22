using System;  
 using System.IO; 
   using System.Runtime.Serialization.Formatters.Binary;  
    
   namespace Piyal1{ 
    [Serializable]
    class Student  
    {  
        public int rollno;  
        public string name;  
        public Student(int rollno, string name)  
        {  
            this.rollno = rollno;  
            this.name = name;  
        }
    }  
    public class DeserializeExample  
    {  
        public static void Main(string[] args)  
        {  
            FileStream stream = new FileStream("/storage/emulated/0/Serialization.Sr",FileMode.Open);  
            BinaryFormatter formatter=new BinaryFormatter();  
      
            Student obj = (Student)formatter.Deserialize(stream);
            Console.WriteLine("Rollno: " + obj.rollno);  
            Console.WriteLine("Name: " + obj.name); 
            stream.Close();  
        }  
    } 
 }