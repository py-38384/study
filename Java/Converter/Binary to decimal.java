import java.util.Scanner;
public class Main {
	public static int powerof(int num,int power){
		if(power <= 0){
			return 1;
		}
		return (num*(powerof(num,power-1)));
	}
	public static int getdacimal(int binary){
		int dacimal = 0,i = 0;
		int lastdigit = 0,curr_dacimal = 0;
		while(binary != 0){
			lastdigit = binary%10;
			curr_dacimal = lastdigit * powerof(2,i);
			dacimal += curr_dacimal;
			binary/=10;
			i++;
		}
		return dacimal;
	}
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		System.out.println("Enter a binary number/-");
		int num = input.nextInt();
		int dacimal = getdacimal(num);
		System.out.println("Dacimal = "+dacimal);
	}
}