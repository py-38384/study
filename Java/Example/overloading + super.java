class Add{
	int result;
	int add(int a,int b){
		result = a + b;
		return result;
	}
}
class Sum extends Add{
	double result;
	double add(int a,int b,double c){
		result = a + b + c;
		System.out.println(super.add(a,b));
		return result;
	}
}
public class Main {
	public static void main(String[] args) {
		Sum a = new Sum();
		System.out.println(a.add(10,12,20.36));
	}
}