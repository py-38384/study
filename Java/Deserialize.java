import java.io.*;
class Employee implements java.io.Serializable{
	String name;
	String address;
	transient int SSN;
	int number;
	void mailCheck(){
		System.out.println("Mailing a chack to"+name+""+address);
	}
}
public class Main {
	public static void main(String[] args) {
		Employee e = new Employee();
		try {
         FileInputStream fileIn = new FileInputStream("/storage/emulated/0/employee.ser");
         ObjectInputStream in = new ObjectInputStream(fileIn);
         e = (Employee) in.readObject();
         in.close();
         fileIn.close();
      } catch (IOException i) {
         i.printStackTrace();
         return;
      } catch (ClassNotFoundException c) {
         System.out.println("Employee class not found");
         c.printStackTrace();
         return;
      }
      System.out.println("Deserialized Employee...");
      System.out.println("Name: " + e.name);
      System.out.println("Address: " + e.address);
      System.out.println("SSN: " + e.SSN);
      System.out.println("Number: " + e.number);
   }
}