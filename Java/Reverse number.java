import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    
    Scanner input = new Scanner(System.in);
    
    System.out.println("Enter the number/-");
    
    int num = input.nextInt();
    int reversed = 0;

    for(;num != 0; num /= 10) {
      int digit = num % 10;
      reversed = reversed*10 + digit;
    }

    System.out.println("Reversed Number: " + reversed);
  }
}