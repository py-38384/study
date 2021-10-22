import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		int[] arr = new int[10];
		int i,j,temp;
		System.out.println("Enter the array/-");
		for(i = 0;i < arr.length;i++){
			arr[i] = input.nextInt();
		}
		System.out.println("Before sorting/__");
		for(i = 0;i < arr.length;i++){
			System.out.print(arr[i]+" ");
		}
		for(i = 0;i < arr.length;i++){
			for(j = 0;j < arr.length -1;j++){
				if(arr[j] > arr[j+1]){
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
		System.out.println("\nAfter sorting/__");
		for(i = 0;i < arr.length;i++){
			System.out.print(arr[i]+" ");
		}
	}
}