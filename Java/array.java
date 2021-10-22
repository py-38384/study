import java.util.Scanner;
public class main{
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		int[] array = new int[100];
		for(int i = 0;i < 10;i++){
			  array[i] = input.nextInt();
		}
		System.out.println("-------------");
		for(int i = 0;i < 10;i++){
			System.out.println(array[i]);
		}
	}
}