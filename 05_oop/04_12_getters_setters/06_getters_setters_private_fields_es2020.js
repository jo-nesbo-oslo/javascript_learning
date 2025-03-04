class B {
    #balance; // Private property

    constructor(balance) {
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative!");
        } else {
            this.#balance = amount;
        }
    }
}

const acc = new B(1000);
console.log(acc.balance);
acc.balance = -500;  // "Balance cannot be negative!"
