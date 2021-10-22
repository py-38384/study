import java.io.File;
import java.util.Scanner;
public class main{
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		System.out.println("Enter the file path with it's name.");
		String path = input.nextLine();
		File file = new File(path);
		boolean value = file.delete();
        if(value){
        	System.out.println("File deleted successfully.");
        }
        else{
            System.out.println("File is not deleted.");
        }
	}
}