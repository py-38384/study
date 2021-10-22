using System;  
using System.Threading;  
    public class MyClass{
     
        public void Func(){
        	//lock(this){
        	Thread t = Thread.CurrentThread;
        
            for (int i = 1; i <= 100; i++){ 
            
                Console.WriteLine(t.Name+" = "+i);
                //Thread.Sleep(150);
            }  
         // } 
       }
    }  
    public class ThreadExample{ 
    
        public static void Main(){  
        
            MyClass obj = new MyClass();
            Thread t1 = new Thread(new ThreadStart(obj.Func));  
            Thread t2 = new Thread(new ThreadStart(obj.Func)); 
            Thread t3 = new Thread(new ThreadStart(obj.Func));
            t1.Name = "1st thread";
            t2.Name = "2nd thread";
            t3.Name = "3rd thread";
            t1.Start();  
            t2.Start();  
            t3.Start();
        }  
    }  