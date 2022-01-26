function BankAccount(balance) {
  this.balance = balance;
}

BankAccount.prototype.deposit = function(moneyIn) {
  this.balance += moneyIn
};