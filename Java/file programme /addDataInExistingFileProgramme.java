import java.util.Scanner;
import java.io.FileWriter;
public class Main {
	public static void main(String[] args){
	     Scanner input1 = new Scanner(System.in);
	     Scanner input2 = new Scanner(System.in);
	     String data;
	     int choice,i = 1;
	     try{
			FileWriter f = new FileWriter("/storage/emulated/0/Text.txt",true);
			while(true){
			System.out.println("Enter the data.line no:"+i);
		    data = input1.nextLine()+("\n");
			f.write(data);
			System.out.println("_ _ _ _Enter_ _ _ _\n1 for enter more data.\n2 for save file.");
			choice = input2.nextInt();
			if(choice == 2){
				break;
			}
			System.out.print("\033[H\033[2J");
			System.out.flush();
			i++;
			}
			f.close();
			System.out.println("File saved successful.");
		}catch(Exception e){
			System.out.println("Error.");
		}
	}
}