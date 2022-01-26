function BankAccount(balance) {
  this.balance = balance;
}

BankAccount.prototype.deposit = function(moneyIn) {
  this.balance += moneyIn
};

BankAccount.prototype.withdrawal = function(moneyOut) {
  this.balance -= moneyOut
};

$(document).ready(function() {
  $("form#bank").submit(function(event) {
    event.preventDefault();
    const initDeposit = parseInt($("number#initial-deposit").val());
    let inputtedDeposit = parseInt($("number#deposit").val());