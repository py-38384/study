using System;  
    namespace AnonymousMethods  
    {  
        class Program  
        {  
            delegate int AnonymousFun();  
            static void Main(string[] args)  
            {  
                fun = AnonymousFun = x => x + x;
                System.Console.WriteLine(fun(5));  
            }  
        }  
    }  