class Bank{
	String name;
	private long nid;
	static private long id;
	private long balance;
	Bank(String name,long nid,long id){
		this.name = name;
		this.nid = nid;
		this.id = id;
	}
	void addMoney(long amount){
		if(amount <= 1000){
			System.out.println("Insufficient Balance to add!");
		}
		else{
			this.balance += amount;
			System.out.println(amount+" TK added successfully");
		}
	}
	void checkBalance(){
		System.out.println("Main account balance = "+this.balance+" TK");
	}
	void withdraw(int amount){
		if(amount < 1000 || amount > this.balance){
			System.out.println("Insufficient Balance to Withdraw!");
		}
		else{
			this.balance -= amount;
			System.out.println(amount+" withdraw successful");
		}
	}	
}
public class Main {
	public static void main(String[] args) {
		Bank obj = new Bank("Piyal hossein",26367472,4953267);
		obj.addMoney(10000);
		obj.addMoney(5000);
		obj.checkBalance();
		obj.withdraw(20000);
		obj.checkBalance();
		obj.withdraw(10000);
		obj.checkBalance();
	}
}