import java.util.Scanner;
public class Main{
	public static void main(String[] args) {
		double num1, num2;
		char oparetor;
		Scanner input = new Scanner(System.in);
		num1 = input.nextDouble();
	while(true){
   	oparetor = input.next().charAt(0);
   	if(oparetor == '='){
   		break;
   	}
		num2 = input.nextDouble();
		switch(oparetor){
			case '+':
			        num1 = num1+num2;
			        break;
			case '-':
			        num1 = num1-num2;
			        break;
			case '*':
			        num1 = num1*num2;
			        break;
			case '/':
			        num1 = num1/num2;
			        break;
			default:
			System.out.println("Wrong chose");
		}
			System.out.print("\033[H\033[2J");
			System.out.flush();
			System.out.print(num1);
		}
	}
}