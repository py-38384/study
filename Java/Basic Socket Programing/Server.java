import java.io.*;
import java.net.*;
public class server{
	public static void main(String[] args){
		try{
			ServerSocket ss = new ServerSocket(6666);
			DataInputStream dis = new DataInputStream(s.getInputStream());
			String str = (String).dis.readUTF();
			System.out.println("massage = "+str);
			dis.close();
			ss.close();
		}catch(Exception e){
			System.out.println(e);
		}
	}
}