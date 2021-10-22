import java.io.*;
public class CopyFile {
 
   public static void main(String args[]) throws IOException {  
      FileInputStream in = null;
      FileOutputStream out = null;
      boolean flag = true;
 
      try {
         in = new FileInputStream("/storage/emulated/0/   ");/*this statement should change if file name or path changed(by default it locate on the home path of the storage*/
         out = new FileOutputStream("/storage/emulated/0/    ");/*this statement should change if file name or path changed(by default it locate on the home path of the storage*/
         
         int c;
         while((c = in.read()) != -1){
         out.write(c);
         }
 
      }catch(FileNotFoundException e){
      	System.out.println("File not found!!plz chack file name and path.");
      	flag = false;
      }
      finally {
         if (in != null) {
            in.close();
         }
         if (out != null) {
            out.close();
         }
      }
      if(flag){
           System.out.println("File copy successful.");
      }
   }
}