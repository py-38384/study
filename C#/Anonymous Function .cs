using System;  
    namespace AnonymousMethods  
    {  
        class Program  
        {  
          delegate void AnonymousFun(int num);  
            static void Main(string[] args)  
            {  
                AnonymousFun fun = delegate (int num) {  
                    Console.WriteLine("Squre of {0} = {1}",num,(num*num));  
                };
                fun(23);  
            }  
        }
    }