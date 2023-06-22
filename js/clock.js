const clock = document.querySelector("h2#clock");

function tickClock() {
	const date = new Date();
	const hour = date.getHours().toString().padStart(2, "0");
	const minute = date.getMinutes().toString().padStart(2, "0");
	const second = date.getSeconds().toString().padStart(2, "0");
	const time = `${hour}:${minute}:${second}`;
	clock.innerHTML = time;
}

tickClock();
setInterval(tickClock, 1000);
