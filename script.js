// Mock data for account information (in a real app, this data would be fetched from a backend).
let account = {
    accountNumber: '123456',
    pin: '1234',
    name: 'John Doe',
    balance: 5000,
    transactions: []
};

// Function to display account info
function displayAccountInfo() {
    document.getElementById('account-name').innerText = account.name;
    document.getElementById('balance').innerText = `$${account.balance}`;
    document.getElementById('transaction-list').innerHTML = account.transactions.map(transaction => `<li>${transaction}</li>`).join('');
}

// Login functionality
document.getElementById('login-btn').addEventListener('click', () => {
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;

    if (accountNumber === account.accountNumber && pin === account.pin) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('account-info-section').style.display = 'block';
        displayAccountInfo();
    } else {
        alert('Invalid Account Number or PIN');
    }
});

// Deposit functionality
document.getElementById('deposit-btn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        account.balance += amount;
        account.transactions.push(`Deposited: $${amount}`);
        displayAccountInfo();
    } else {
        alert('Please enter a valid amount.');
    }
});

// Withdraw functionality
document.getElementById('withdraw-btn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && amount <= account.balance) {
        account.balance -= amount;
        account.transactions.push(`Withdrew: $${amount}`);
        displayAccountInfo();
    } else {
        alert('Insufficient balance or invalid amount.');
    }
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', () => {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('account-info-section').style.display = 'none';
});
