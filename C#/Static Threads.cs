using System;  
using System.Threading;  
    public class MyClass{
     
        public void Func(){
        
            for (int i = 0; i < 11; i++){ 
            
                Console.Write(i);  
            }  
        }  
    }  
    public class ThreadExample{ 
    
        public static void Main(){  
        
            MyClass obj = new MyClass();
            Thread t1 = new Thread(new ThreadStart(obj.Func));  
            Thread t2 = new Thread(new ThreadStart(obj.Func)); 
            Thread t3 = new Thread(new ThreadStart(obj.Func));
            t1.Start();  
            t2.Start();  
            t3.Start();
        }  
    }  