class Class{ 
   static int outer_x = 10;
   int outer_y = 20;
   private static int outer_private = 30;
   class ClassintoClass{
   	 private int age = 19;
   	 void display(){
   	 	System.out.println("This is the example of nested class.lavel 1");
   	 	System.out.println("outer_x = " + outer_x);
   	 	System.out.println("outer_private = " + outer_private);
          }
          class ClassintoClass2{
          	void displayage(){
          		System.out.println("This is the example of nested into nested class.lavel 2");
          		System.out.println("Age = "+age);
          	}
         }
         void func2(){
         	ClassintoClass2 nesobj2 = new ClassintoClass2();
         	nesobj2.displayage();
         }
   }
     void func(){
     	ClassintoClass nesobj = new ClassintoClass();
     	nesobj.display();
     	nesobj.func2();
     }
}

public class Main{
       public static void main(String[] args){
       	Class obj = new Class();
           obj.func();
       }
}