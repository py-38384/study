struct Student{
   var name = ""
   var roll = 0
}
class Human{
   var name:String
   var age:Int
   var gander:String
   init(n:String, a:Int, g:String){
       name = n
       age = a
       gander = g
   }
   func getabout(){
      print(name)
      print(age)
      print(gander)
   }
}

let me = Human(n:"Piyal Hossain", a:19, g:"male")
me.getabout()
//inheritance = class Piyal:Human{}