class Bank:
    def __init__(self):
        self.__balance = 0
    def get_balance(self):
        print("Balance = {0}".format(self.__balance))
    def add_balance(self,amount):
    	self.__balance+=amount
    	print("{0} balance added successfully".format(amount))
    def withdraw(self, amount):
        if amount < 1000:
            print('Minimum limit crossed')
        elif amount > self.__balance:
            print('Not enough balance to withdrow')
        else:
            self.__balance -= amount
            print("{0} Balance withdrow successful".format(amount))
            
            
my_bank_account = Bank()
my_bank_account.add_balance(10000)
my_bank_account.get_balance()
my_bank_account.withdraw(15000)
my_bank_account.get_balance()
my_bank_account.withdraw(9000)
my_bank_account.get_balance()