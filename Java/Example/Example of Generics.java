class Generics<T>{
	public static int count = 0;
	private T data;
	Generics(T data){
		this.data = data;
		count++;
	}
	T getdata(){
		return this.data;
	}
}
public class Main {
	public static void main(String[] args) {
		String data = "Piyal hossein";
		Generics obj = new Generics (data);
		Generics obj2 = new Generics(obj);
		System.out.println(obj2);
        Generics name = (Generics)obj2.getdata();
        System.out.println(name.getdata());
        System.out.println(obj.getdata());
        System.out.println(Generics.count);
	}
}