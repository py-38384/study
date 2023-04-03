import java.io.FileReader;
import java.util.Scanner;
public class main{
	public static void main(String[] args){
		char show[] = new char[1000];
		Scanner scan = new Scanner(System.in);
		try{
			System.out.println("Enter the path and name of the file.");
			String path = scan.nextLine();
			FileReader input = new FileReader(path);
			input.read(show);
			System.out.println("Showing content of file...\n");
			System.out.println(show);
			input.close();
		}catch(Exception e){
			e.getStackTrace();
		}
	}
}