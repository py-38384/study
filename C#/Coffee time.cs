using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        static void Main(string[] args)
        {
            int discount = Convert.ToInt32(Console.ReadLine());

            Dictionary<string, int> coffee = new Dictionary<string, int>();
            coffee.Add("Americano", 50);
            coffee.Add("Latte", 70);
            coffee.Add("Flat White", 60);
            coffee.Add("Espresso", 60);
            coffee.Add("Cappuccino", 80);
            coffee.Add("Mocha", 90);
            
            
            coffee["Americano"] = (50 - ((50*discount)/100));
            coffee["Latte"] = (70 - ((70*discount)/100));
            coffee["Flat White"] = (60 - ((60*discount)/100));
            coffee["Espresso"] = (60 - ((60*discount)/100));
            coffee["Cappuccino"] = (80 - ((80*discount)/100));
            coffee["Mocha"] = (90 - ((90*discount)/100));
           
            foreach(var kvp in coffee){
            Console.WriteLine("{0}: {1}", kvp.Key, kvp.Value);
            }


        }
    }
}