// Funzione per generare valori casuali di tensione (V), corrente (I), pressione atmosferica e direzione del vento
function getRandomValue(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
}

function getRandomDirection() {
    const directions = ['Nord', 'Sud', 'Est', 'Ovest'];
    return directions[Math.floor(Math.random() * directions.length)];
}

function calculatePower(voltage, current) {
    return (voltage * current).toFixed(2);
}

function getRandomControllerTemperature() {
    return getRandomValue(20, 45) + "°C";
}

function updateValues() {
    let voltage = getRandomValue(30, 60);
    let current = getRandomValue(2, 10);
    let windDirection = getRandomDirection();

    let power = calculatePower(voltage, current) + " W";
    let windSpeed = getRandomValue(0, 50) + " km/h";

    let batteryLevel = getRandomValue(0, 100);
    let batteryIcon = document.getElementById("battery-icon");
    if (batteryLevel > 50) {
        batteryIcon.className = "fas fa-battery-full icon";
    } else if (batteryLevel > 20) {
        batteryIcon.className = "fas fa-battery-half icon";
    } else {
        batteryIcon.className = "fas fa-battery-empty icon";
    }

    document.getElementById("solar").innerText = voltage + " V";
    document.getElementById("current").innerText = current + " A";
    document.getElementById("power").innerText = power;
    document.getElementById("wind").innerText = windSpeed;
    document.getElementById("temperature").innerText = getRandomValue(10, 35) + "°C";
    document.getElementById("water").innerText = getRandomValue(0, 100) + " L";
    document.getElementById("wind-direction").innerText = windDirection;
    document.getElementById("controller-temp").innerText = getRandomControllerTemperature();
    document.getElementById("battery-station").innerText = batteryLevel + "%";
}

setInterval(updateValues, 2000);