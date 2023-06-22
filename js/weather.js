const API_KEY = "1582f627ab547f4f7530a268b561454e";

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weatherContainer = document.querySelector("#weather");
			const cityP = weatherContainer.querySelector("#city");
			const weatherP = weatherContainer.querySelector("img");
			const tempP = weatherContainer.querySelector("#temp");
			const city = data.name;
			const weather = data.weather[0].icon;
			const icon = `https://openweathermap.org/img/wn/${weather}@2x.png`;
			const temp = data.main.temp;
			cityP.innerText = city;
			weatherP.src = icon;
			tempP.innerText = `${temp}°C`;
		});
}

function onGeoError() {
	alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
