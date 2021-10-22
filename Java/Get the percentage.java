import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		double num1, num2, result;
		Scanner input = new Scanner(System.in);
		System.out.println("Enter number1/_");
		num1 = input.nextDouble();
		System.out.println("Enter number2/_");
		num2 = input.nextDouble();
		result = (num2/num1)*100;
		System.out.println("Result = "+result+"%");
	}
}