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
		e.name = "Rayan ali";
		e.address = "Phokka Kuan, Ambehta Peer";
		e.SSN = 11122333;
		e.number = 101;
		
		try{
			FileOutputStream fileout = new FileOutputStream("/storage/emulated/0/employee.ser");
			ObjectOutputStream out = new ObjectOutputStream(fileout);
			out.writeObject(e);
			out.close();
			fileout.close();
			System.out.printf("Serialized data is saved in /storage/emulated/0/employee.ser");
		}catch(IOException i){
			i.printStackTrace();
		}
	}
}