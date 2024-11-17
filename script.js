// Liste der Städte mit UTC-Versatz
const cities = [
  { id: "new-york", name: "New York", offset: -5 },
  { id: "los-angeles", name: "Los Angeles", offset: -8 },
  { id: "chicago", name: "Chicago", offset: -6 },
  { id: "london", name: "London", offset: 0 },
  { id: "paris", name: "Paris", offset: 1 },
  { id: "berlin", name: "Berlin", offset: 1 },
  { id: "madrid", name: "Madrid", offset: 1 },
  { id: "rom", name: "Rom", offset: 1 },
  { id: "moskau", name: "Moskau", offset: 3 },
  { id: "istanbul", name: "Istanbul", offset: 3 },
  { id: "dubai", name: "Dubai", offset: 4 },
  { id: "mumbai", name: "Mumbai", offset: 5.5 },
  { id: "bangkok", name: "Bangkok", offset: 7 },
  { id: "jakarta", name: "Jakarta", offset: 7 },
  { id: "peking", name: "Peking", offset: 8 },
  { id: "tokio", name: "Tokio", offset: 9 },
  { id: "seoul", name: "Seoul", offset: 9 },
  { id: "sydney", name: "Sydney", offset: 11 },
  { id: "auckland", name: "Auckland", offset: 13 },
  { id: "kapstadt", name: "Kapstadt", offset: 2 },
  { id: "kairo", name: "Kairo", offset: 2 },
  { id: "nairobi", name: "Nairobi", offset: 3 },
  { id: "buenos-aires", name: "Buenos Aires", offset: -3 },
  { id: "sao-paulo", name: "São Paulo", offset: -3 },
  { id: "mexiko-stadt", name: "Mexiko-Stadt", offset: -6 },
  { id: "vancouver", name: "Vancouver", offset: -8 },
  { id: "toronto", name: "Toronto", offset: -5 },
  { id: "honolulu", name: "Honolulu", offset: -10 },
  { id: "riad", name: "Riad", offset: 3 },
  { id: "singapur", name: "Singapur", offset: 8 },
];

// Funktion zum Aktualisieren einer Uhr
function updateClock(elementId, offset) {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const localTime = new Date(utc + 3600000 * offset);

  const timeString = localTime.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  document.querySelector(`#${elementId} .time`).textContent = timeString;
}

// Funktion zum Initialisieren der Uhren
function initializeClocks() {
  const clockContainer = document.getElementById("clocks");
  cities.forEach((city) => {
    const clockDiv = document.createElement("div");
    clockDiv.className = "clock";
    clockDiv.id = city.id;

    clockDiv.innerHTML = `
            <h2>${city.name} (UTC${
      city.offset >= 0 ? `+${city.offset}` : city.offset
    })</h2>
            <p class="time">Wird geladen...</p>
        `;

    clockContainer.appendChild(clockDiv);
  });
}

// Funktion zum Aktualisieren aller Uhren
function updateAllClocks() {
  cities.forEach((city) => updateClock(city.id, city.offset));
}

// Initialisierung und Start der Aktualisierung
initializeClocks();
setInterval(updateAllClocks, 1000);
updateAllClocks();
