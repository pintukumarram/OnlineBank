// script.js



// script.js
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance > 0 ? initialBalance : 0;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      alert(`Deposited: ${amount}`);
    } else {
      alert("Deposit amount must be positive.");
    }
    this.updateBalanceDisplay();
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      alert(`Withdrawn: ${amount}`);
    } else {
      alert("Insufficient balance or invalid amount.");
    }
    this.updateBalanceDisplay();
  }

  getBalance() {
    return this.#balance;
  }

  updateBalanceDisplay() {
    document.getElementById("balance").textContent = this.getBalance();
  }
}

const account = new BankAccount(1000);
account.updateBalanceDisplay();

document.getElementById("deposit-btn").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  account.deposit(amount);
});

document.getElementById("withdraw-btn").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  account.withdraw(amount);
});

// Navbar and Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const balanceEl = document.getElementById("balance");
  let balance = parseFloat(
    balanceEl.textContent.replace("$", "").replace(",", "")
  );

  document.getElementById("deposit-btn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0) {
      balance += amount;
      balanceEl.textContent = `$${balance.toFixed(2)}`;
      alert(`Deposited: $${amount}`);
    } else {
      alert("Deposit amount must be positive.");
    }
  });

  document.getElementById("withdraw-btn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      balanceEl.textContent = `$${balance.toFixed(2)}`;
      alert(`Withdrawn: $${amount}`);
    } else {
      alert("Insufficient balance or invalid amount.");
    }
  });
});
