import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		double num, percent, result;
		Scanner input = new Scanner(System.in);
		System.out.println("Enter the number/_");
		num = input.nextDouble();
		System.out.println("Enter percentage/_");
		percent = input.nextDouble();
		result = (num*percent)/100;
		System.out.println("Result = "+result);
	}
}