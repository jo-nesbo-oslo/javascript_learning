class BankAccount{
    #balance;
    constructor(b1) {
        this.#balance = b1;
    }
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}`);
    }
    getBankAccountBalance() {
        return this.#balance;
    }
}

const a1 = new BankAccount(1000);
a1.deposit(500);
console.log(a1.getBankAccountBalance()); 
