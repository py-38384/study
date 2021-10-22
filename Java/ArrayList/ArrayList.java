import java.util.*;
public class main{
	public static void main(String[] args){
		ArrayList<Integer> nums = new ArrayList<Integer>();
		Scanner input = new Scanner(System.in);
		int num = 0;
		while(true){
		try{
			num = input.nextInt();
			if(num == 0){
				break;
			}
			nums.add(num);
		}catch(InputMismatchException e){
			System.out.println("Error! invalid input");
			break;
		}
		}
		System.out.println(nums);
		System.out.println("Size of ArrayList is:"+nums.size());
		nums.clear();
	}
}
