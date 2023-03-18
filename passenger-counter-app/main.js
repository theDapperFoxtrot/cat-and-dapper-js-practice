// document.getElementById("count").innerText = 5;

let count = 0;
let saverText = document.getElementById('saver');

function increment() {
	count += 1;
	document.getElementById('count').innerText = count;
}

function save() {
	let previous = count + ' - ';
}

const username = 'Steve';

const message = 'You have three new messages';

const messageToUser = message + ', ' + username;
