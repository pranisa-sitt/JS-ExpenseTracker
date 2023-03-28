// Object part
const account = {
  name: "Pranisa",
  income: [],
  expense: [],
  expenseAmount: [],

  addIncome: function () {
    const incomeInput = parseFloat(prompt("How much was your income?"));
    //if income value is not true(all falsy value) ,return alert msg
    if (!incomeInput) {
      alert(`Please fill your income.`);
      //if it ture(defualt) it will push value to income array.  
    } else if (incomeInput) {
      this.income.push(incomeInput);
    }
  },

  addExpenseItem: function () {
    const expenseNameInput = (prompt("What was your Expense?"));
    if (!isNaN(expenseNameInput) === true) {
      alert(`Please add your expense name.`);
      menu();
      // if expenseNameInput is ture (string), push value to expense array and move to another prompt,input expense amount.
    } else if (expenseNameInput) {
      this.expense.push(expenseNameInput);
      this.addExpenseAmount();
    }
  },

  addExpenseAmount: function () {
    const expenseAmountInput = parseFloat(prompt("How much was your Expense?"));
    if (expenseAmountInput) { //if input value is truthy value, push value of expenseAmountInput to expense array.
      this.expenseAmount.push(expenseAmountInput);
      //if value falsy is true it will run alert msg.
    } else if (isNaN(expenseAmountInput)) {
      alert(`Please add your expense amount.`);
      this.addExpenseAmount();
    }
  },

  listExpense: function () {
    // if expense and expenseAmount empty
    // alert msg ---- TBC
    let List = "";
    for (let i = 0; i < this.expense.length; i++) {
      List += `Expense nr${1 + this.expense.indexOf(this.expense[i])}: ${this.expense[i]} - Amount: ${this.expenseAmount[i]}\n`;
    }; //loop result = indexOf expense: expense[] - expenseAmount[].
    if (this.expenseAmount.length === 0 && this.expense.length === 0) {
      alert(`Please fill expense first`);
      menu();
    }
    alert(List);
  },

  totalIncome: function () {
    let sumIncome = 0; // sum of income
    //sum income = increment income index
    for (let income of this.income) {
      sumIncome += income
    }
    return sumIncome;
  },

  // cal sum of expenses
  getExpense: function () {
    let sum = 0;
    for (let amount of this.expenseAmount) {
      sum += amount
    }
    return sum;
  },

  getSummary: function () {
    
    alert(`${this.name}, your balance are:\n
    Total balance: ${this.totalIncome() - this.getExpense()}\n 
    Total income: ${this.totalIncome()}\n
    Total expense: ${this.getExpense()}`);
  },
}

// Menu part
function menu() {
  const inputChoice = parseFloat(prompt("EXPENSE TRACKER\nSelect a choice 1.)Add income 2.)Add expenses 3.)List all expense 4.)Get summary"));
  if (inputChoice === 1) {
    account.addIncome();
    menu();
  }
  else if (inputChoice === 2) {
    account.addExpenseItem();
    menu();
  }
  else if (inputChoice === 3) {
    account.listExpense();
    menu();
  }
  else if (inputChoice === 4) {
    account.getSummary();
    menu();
  } else if (typeof inputChoice === "string") { // when user fill a string input
    alert(`Invalid input, please fill number 1-4 in the field.`);
  }
  else if (isNaN(inputChoice)) {
    alert(`Thank you, see you next time`);
  }

}
menu();


