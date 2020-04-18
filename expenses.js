const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTrans = [
	{ id: 1, text: 'Hippie', amount: -20 },
	{ id: 2, text: 'Jeans', amount: 230 },
	{ id: 3, text: 'Shirt', amount: -20 },
	{ id: 4, text: 'Boho', amount: 421 }
];

let transactions = dummyTrans;

// Add transactions to DOM

function addTransaction(transaction) {
	// Get sign ternary
	// const sign = transaction.amount < 0 ? '-' : '+';

	// Get Sign if else
	let sign;
	if (transaction.amount < 0) {
		sign = '-';
	} else {
		sign = '+';
	}

	// Create list item
	const item = document.createElement('li');

	// add class based on value - ternary
	// item.classList.add(
	// 	transaction.amount < 0 ? 'minus' : 'plus'
	// );

	// add class based on value - if else
	if (transaction.amount < 0) {
		item.classList.add('minus');
	} else {
		item.classList.add('plus');
	}

	item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
		transaction.amount
	)}</span> <button class="delete-btn">X</button>
    `;

	list.appendChild(item);
}

// Update Balance Income and Expense

function updateValues() {
	const amounts = transactions.map((transaction) => {
		return transaction.amount;
	});

	const total = amounts
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	const expense = (amounts
		.filter((item) => item < 0)
		.reduce((acc, item) => (acc += item), 0) *
		-1).toFixed(2);

	balance.innerText = `$${total}`;
	money_plus.innerText = income;
	money_minus.innerText = expense;
	console.log(amounts);
}

// init app

function init() {
	list.innerHTML = '';

	transactions.forEach(addTransaction);
	updateValues();
}

init();
