import java.util.Scanner;
public class Main {
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the step/-");
		int num = input.nextInt();
		long fibo[] = new long[num+10];
		fibo[0] = 0;
		fibo[1] = 1;
		int i = 2;
		int last = 1,last2 = 0;
		long newfibo = 0;
		while(i <= num){
			newfibo = fibo[last] + fibo[last2];
			fibo[++last] = newfibo;
			++last2;
			++i;
		}
		System.out.println("Fibonacci sequence/_ _ _");
		for(int c = 0;c < last;c++){
			System.out.println(fibo[c]);
		}
	}
}