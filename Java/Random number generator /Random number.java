import java.util.Random;
public class Main {
	public static void main(String[] args) {
		Random rand = new Random();
		int rand_num = rand.nextInt(100);
		System.out.println(rand_num);
	}
}