import java.util.Scanner;
public class main{
	public static void main(String[] args){
		int num;
		double sum = 0;
		Scanner input = new Scanner(System.in);
		double arr[] = new double[100];
		System.out.println("How many namber are there?");
		num = input.nextInt();
		System.out.println("Enter numbers/-");
		for(int i = 0;i < num;i++){
			arr[i] = input.nextInt();
		}
		for(int i = 0;i < num;i++){
			sum += arr[i];
		}
		System.out.println("Avarage = "+(sum/num));
	}
}