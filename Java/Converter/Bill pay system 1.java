import java.util.Scanner;
public class main{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        double hours = input.nextFloat();
        double total = 0.0,flag;
        if(hours <= 5.0){
            total = hours;
        }
        if(hours > 5.0 && hours < 24){
            total = 5.0;
            hours -= 5.0;
            total += 0.5*hours;
        }
        else if(hours > 24){
             flag = hours % 24.0;
             hours -= flag;
             total += 15 * (hours/24.0);
             total += 0.5 * flag;
        
          }
        System.out.println(total);
     }
}