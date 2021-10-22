import java.util.Scanner;
public class main{
    public static int gcd(int a,int b){
       if(b==0)
          return a;
       else
          return gcd(b,a%b);
    }
    public static void main(String[] args){
    	 Scanner input = new Scanner(System.in);
    	 System.out.println("Enter 1st number/-");
    	 int a = input.nextInt();
    	 System.out.println("Enter 2nd number/-");
         int b = input.nextInt();
         int GCD = gcd(a,b);
         System.out.println("GCD is: "+GCD);
    }
}