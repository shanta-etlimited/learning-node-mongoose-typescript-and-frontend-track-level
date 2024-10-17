{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id
            this.name = name
            this._balance = balance
        }
        set deposit(amount: number){
            this._balance = this._balance + amount
        }
        // public addDeposit(amount: number){
        //     this._balance = this._balance + amount
        // }

        //getter
        get balance(){
            return this._balance
        }
        // public getBalance(){
        //     return this._balance
        // }
    }

    class StudentAccount extends BankAccount{
        test(){
            this._balance
        }
    }

    const goribManusherAccount = new BankAccount(1, "Gorib Manusher", 1000)
    // goribManusherAccount.addDeposit(500)
    goribManusherAccount.deposit = 500
    // const myBalance = goribManusherAccount.getBalance()

    const myBalance = goribManusherAccount.balance;
    console.log(myBalance);
    // console.log(goribManusherAccount)
}
