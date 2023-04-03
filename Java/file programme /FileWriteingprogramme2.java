import java.io.*;
import java.util.Scanner;
public class CopyFile {
 
   public static void main(String args[]) throws IOException {  
   
      FileOutputStream out = null;
      boolean flag = true;
      Scanner input1 = new Scanner(System.in);
      Scanner input2 = new Scanner(System.in);
      int i = 1,choice;
      String line,path;
 
      try {
         System.out.println("Enter the path with name.");
         path = input2.nextLine();
         out = new FileOutputStream(path);
         System.out.print("\033[H\033[2J");
         System.out.flush();
      while(true){
         System.out.println("Enter line number "+i);
         line = input1.nextLine()+("\n");
         byte[] b = line.getBytes();
         out.write(b);
         System.out.print("\033[H\033[2J");
         System.out.flush();
         System.out.println("_ _ _ _Enter_ _ _ _\n1 for write more line....\n2 for save the file....");
         choice = input2.nextInt();
         System.out.print("\033[H\033[2J");
         System.out.flush();
         if(choice == 2){
         	break;
         }
         choice = 0;
         i++;
      }
      }catch(IOException e){
      	System.out.println("Sameting error.");
      	flag = false;
      }
      finally {
            out.close();
      }
      if(flag){
           System.out.println("\nFile saved successful.");
      }
   }
}