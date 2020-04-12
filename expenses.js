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
	// Get sign
	const sign = transaction.amount < 0 ? '-' : '+';

	// const sign = function() {
	// 	if (transaction.amount < 0) {
	// 		return '-';
	// 	} else {
	// 		return '+';
	// 	}
	// };

	const item = document.createElement('li');

	// add class based on value
	item.classList.add(
		transaction.amount < 0 ? 'minus' : 'plus'
	);

	// item.classList.add(() => {
	// 	if (transaction.amount < 0) {
	// 		('minus');
	// 	} else {
	// 		('plus');
	// 	}
	// });

	item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
		transaction.amount
	)}</span> <button class="delete-btn">X</button>
    `;

	list.appendChild(item);
}

// init app

function init() {
	list.innerHTML = '';

	transactions.forEach(addTransaction);
}

init();
