import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("Enter the number/‌_");
		int num = input.nextInt();
		int[] arr = new int[100];
		int i = 0,temp = num;
		while(true){
			arr[i] = temp%2;
			temp = temp/2;
			if(temp == 0){
				break;
			}
			i++;
		}
		System.out.print("->");
		for(int j = i;j >= 0;j--){
			System.out.print(arr[j]);
		}
	}
}