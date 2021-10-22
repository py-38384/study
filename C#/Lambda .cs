using System;  
    namespace LambdaExpressions  
    {  
        class Program  
        {  
            delegate int Square(int num);  
            static void Main(string[] args)  
            {  
                Square GetSquare = x => x * x;  
                int j = GetSquare(20);    
                Console.WriteLine("Square: "+j);  
            }  
        }  
    }  