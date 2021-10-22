import java.util.Scanner;
public class Main {
	public static long powerof(int num,int power){
		if(power == 0){
			return 1;
		}
		return (num*(powerof(num,power-1)));
	}
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int num,power;
		long result;
		System.out.println("Enter a number/-");
		num = input.nextInt();
		System.out.println("Enter the power/-");
		power = input.nextInt();
		result = powerof(num,power);
		System.out.println("Power of "+num+" = "+result);
	}
}