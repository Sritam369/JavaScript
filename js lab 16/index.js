class BankAccount{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }
    deposit(amount){
        if(amount>0){
            this.balance+=amount;
        }
    }
     withdraw(amount){
        if(amount<=this.balance){
            this.balance-=amount;
        }
    }
    getBalance(){
        return this.balance;
    }
}

function findRichest(accounts){
    let richest = accounts[0];
    for(let i=1;i<accounts.length;i++){
       if (accounts[i].getBalance() > richest.getBalance()) {
      richest = accounts[i];
    }
  }
  return richest.name;
}
const a1 = new BankAccount("Ravi", 2000);
const a2 = new BankAccount("Aman", 3500);
const a3 = new BankAccount("Priya", 5000);

console.log(findRichest([a1,a2,a3]));