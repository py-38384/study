package com.piyal.filecreation2;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;
public class main{
	public static void main(String[] args){
		int choice;
		boolean one = true;
		try{
			Scanner input1 = new Scanner(System.in);
			Scanner input2 = new Scanner(System.in);
			System.out.println("Enter the file path with it's name.");
			String name = input1.nextLine();
            FileOutputStream filedriver = new FileOutputStream(name);
            while(one){
            	int i = 1;
			System.out.println("Enter the file content.line"+(i+1)+"/_");
			String content = input1.nextLine() + "\n";
			byte[] b = content.getBytes();
			filedriver.write(b);
            System.out.println("_ _ _Enter_ _ _");
            System.out.println("1 for Write more line.");
            System.out.println("0 for save the file.");
            choice = input2.nextInt();
            if(choice == 0){
            	break;
            }
            System.out.print("\033[H\033[2J");
            System.out.flush();
            i++;
            }
			System.out.println("File saved successfully.");
			filedriver.close();

}
		catch(IOException e){
			System.out.println("Exception occurred.");
			e.printStackTrace();
		}
	}
}