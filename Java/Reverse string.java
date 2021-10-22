import java.lang.*;
import java.io.*;
import java.util.*;
class ReverseString{
    public static void main(String[] args){
        
        Scanner input = new Scanner(System.in);
        String text = input.nextLine();
 
        StringBuilder input1 = new StringBuilder();
        input1.append(text);
        input1.reverse();
        
        System.out.println(input1);
    }
}