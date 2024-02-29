//your JS code here. If required.
const displayArea = document.getElementById('timer');

function clock(){
	const date = new Date();
	displayArea.innerHTML = date.toString();
}

setInterval(clock, 1000);