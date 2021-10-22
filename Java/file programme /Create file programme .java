package com.piyal.creation1;
import java.io.File;
import java.io.IOException;
public class Main {
	public static void main(String[] args) {
	     try{
	     	File file = new File("/storage/emulated/0/text.txt");
	     	boolean flag = file.createNewFile();
	     	if(flag){
	     		System.out.println("File create successfully.");
	     	}
	     	else{
	     		System.out.println("File already preasent at the location.");
	     	}
	     }
	     catch(IOException e){
	     	System.out.println("Exception Occurred.");
	     	e.printStackTrace();
	     }
	}
}