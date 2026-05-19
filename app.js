// Task 1

const account1 = {
    userName : "Arsalan",
    balance : 50000
};

const account2 = {
    userName : "Subhan",
    balance : 40000
};

// Task 2

function withDraw(amount){
    if(this.balance >= amount){
        this.balance -= amount
        console.log(`${this.userName} Remaining balance is ${this.balance}`)
    }
    else{
        console.log(`The amount entered is greater than your balance.`)
    }
}

// Task 3

withDraw.call(account1 ,3000 );

withDraw.call(account2 , 2500);

// Task 4

withDraw.apply(account1 , [500]);

// Task 5

function deposit(amount) {
    this.balance += amount
    console.log(`Update balance is ${this.balance}`)
}

// Task 6

deposit.call(account1 , 700);

deposit.apply(account2 , [800]);

// Task 7


const account3 = {
    userName : "Ammad",
    balance : 30000,

    showBalance : function () {
        console.log(`${this.userName} balance is ${this.balance}`)
    }
}


const checkBalance = account3.showBalance   

checkBalance()

//  Task 8

const fixedBalance = account3.showBalance.bind(account3)

fixedBalance()    















