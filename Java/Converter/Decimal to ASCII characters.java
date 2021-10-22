import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		int i,size;
		Scanner input = new Scanner(System.in);
		int[] num = new int[100];
		System.out.println("How many number are there?");
		size = input.nextInt();
		System.out.println("Enter the numbers/-");
		for(i = 0;i < size;i++){
			num[i] = input.nextInt();
		}
		System.out.println("ASCLL characters/_");
		for(i = 0;i < size;i++){
	     	System.out.print((char)num[i]);
		}
	}
}