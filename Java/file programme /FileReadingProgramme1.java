package File;
import java.io.*;
import java.util.Scanner;
public class main{
	public static void main(String[] args){
		try{
				
			File filedriver = new File("/storage/emulated/0/Text.txt");
			FileInputStream fis = new FileInputStream(filedriver);
			System.out.println("File content:");
			int r = 0;
			System.out.print("\n");
			while((r=fis.read())!=-1){
			  System.out.print((char)r);
			}
			System.out.print("\n");
		}catch(Exception e){
			  	e.printStackTrace();
		  }		
	}
}