class myException extends Exception{
	String str1;
	myException(String str1){
		this.str1=str1;
	}
	public String toString(){
		return("MyException occurred: "+str1);
	}
}
public class Main {
	public static void main(String[] args) {
		try{
			System.out.println("Starting of try block");
			throw new myException("This is my error messege");
		}catch(myException obj){
			System.out.println("Catch block");
			System.out.println(obj);
		}
	}
}